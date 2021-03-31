import { ActivatedRoute } from '@angular/router';
import {
  SensorModel,
  SensorRePackModel,
  contextResponsesModel,
  attributesModel,
  attributesReModel,
} from './../../../models/farm-model';
import { Component, Input, OnInit } from '@angular/core';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss'],
})
export class SensorComponent implements OnInit {
  @Input() sensor!: SensorModel;
  neededArray: SensorRePackModel[] = [];

  id!: string;
  sensors: SensorModel[] = [];

  idPart!: string;
  type!: string;
  attr!: string;
  aggrMethiod: string = 'max';
  aggrPeriod: string = 'hour';
  // set default time for testing
  dateFrom: string = '2021-02-08T00:00:00.000Z';
  dateTo: string = '2021-02-08T23:59:59.999Z';
  shortTerm: contextResponsesModel[] = [];
  attrPart: Array<any> = [];
  dateTime!: Date;

  // For Chart Data
  timeOrigin!: string;
  maxValue: Array<number> = [];
  timeOffset: Array<any> = [];

  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute // Activated route to get the current component's inforamation) {}
  ) {}

  ngOnInit(): void {
    // Step 1. Get all the object keys.
    let sensorProperties = Object.keys(this.sensor);

    // Step 2. Create an empty array.
    this.neededArray = [];

    // Step 3. Iterate throw all keys.
    let i = 0;
    for (let prop of sensorProperties) {
      if (
        prop != 'id' &&
        prop != 'type' &&
        prop != 'mounting_point' &&
        prop != 'mounting_point_name' &&
        prop != 'refStore' &&
        prop != 'external' &&
        prop != 'MAC' &&
        prop != 'TimeInstant' &&
        prop != 'WindOut' &&
        prop != 'WindTemp'
      ) {
        const sensorRP = new SensorRePackModel();
        sensorRP.name = prop;
        sensorRP.data = Object.values(this.sensor)[i];
        // sensorRP.data.value = Number(sensorRP.data.value)
        // console.log("🚀  sensorRP.data", sensorRP.data.value)
        this.neededArray.push(sensorRP);
      }
      i++;
    }

    let dateTimeNow = new Date();
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

    // ********** Short term **********
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.idPart = this.sensor.id;
      this.type = this.sensor.type;
      this.dateFrom = yesterday.toISOString();
      this.dateTo = dateTimeNow.toISOString();

      for (let sensorAttr of this.neededArray) {
        // get shortTerm only attribute data are not null or blank.
        if (
          sensorAttr.data.value != null &&
          sensorAttr.data.value.toString().trim() != ''
        ) {
          // convert type of data.value for using in the gauges
          // sensorAttr.data.value = Number(sensorAttr.data.value)
          // sensorAttr.data.metadata.ranges.value.max = Number(sensorAttr.data.metadata.ranges.value.max)
          // sensorAttr.data.metadata.ranges.value.min = Number(sensorAttr.data.metadata.ranges.value.min)
          // console.log("🚀 this.neededArray", this.neededArray)
          this.attr = sensorAttr.name;
          this.markerService
            .getShortTerm(
              this.id,
              this.idPart,
              this.type,
              this.attr,
              this.aggrMethiod,
              this.aggrPeriod,
              this.dateFrom,
              this.dateTo
            )
            .subscribe((res: contextResponsesModel[]) => {
              console.log('shortTerm: ', res);
              this.shortTerm = res;
              let res2: any = res;

              const attr = new attributesReModel();
              attr.name =
                res2.contextResponses[0].contextElement.attributes[0].name;
              attr.values =
                res2.contextResponses[0].contextElement.attributes[0].values;

              this.maxValue = [];
              this.timeOffset = [];
              let j = 1;
              for (let points of attr.values) {
                this.timeOrigin = points._id.origin;
                let i = 1;
                for (let point of points.points) {
                  this.maxValue.push(point.max);
                  let origin = new Date(this.timeOrigin);
                  // Show date only first time and midnight
                  if ((i == 1 && j == 1) || point.offset == 17) {
                    let offsetTime = new Date(
                      origin.setHours(origin.getHours() + point.offset)
                    ).toLocaleString('TH-th');
                    this.timeOffset.push(offsetTime);
                  } else {
                    let offsetTime = new Date(
                      origin.setHours(origin.getHours() + point.offset)
                    ).toLocaleTimeString('TH-th');
                    this.timeOffset.push(offsetTime);
                  }
                  i++;
                }
                j++;
              }
              attr.offsetTimeArr = this.timeOffset;
              attr.valueJson = [{ data: this.maxValue, label: attr.name }];
              this.attrPart.push(attr);
            });
        }
      }
    });
  }

  getNameKey(sensor: SensorModel, index: number) {
    Object.keys(sensor)[index];
  }
}
