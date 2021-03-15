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
  dateFrom!: string;
  dateTo!: string;
  shortTerm: contextResponsesModel[] = [];
  attrPart: Array<any> = [];
  dateTime!: Date;

  // For Chart Data
  maxValue: Array<number> = [];
  // timeOffset!: Array<number>;

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
              for (let points of attr.values) {
                for (let point of points.points) {
                  this.maxValue.push(point.max);
                }
              }
              // attr.valuesArr = this.maxValue;
              attr.valueJson = [{ data: this.maxValue, label: attr.name }];

              this.attrPart.push(attr);
              console.log('🚀 this.attrPart', this.attrPart);
            });
        }
      }
    });
  }

  getNameKey(sensor: SensorModel, index: number) {
    Object.keys(sensor)[index];
  }
}
