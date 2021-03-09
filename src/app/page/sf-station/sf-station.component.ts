import { SensorModel, contextResponsesModel } from './../../models/farm-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sf-station',
  templateUrl: './sf-station.component.html',
  styleUrls: ['./sf-station.component.scss'],
})
export class SfStationComponent implements OnInit {
  pageTitle = 'Station';
  id!: string;
  sensors: SensorModel[] = [];

  idPart: string = 'urn:ngsi-ld:a4:cf:12:6d:cb:6e';
  type: string = 'SensorBLE';
  attr: string = 'Temperature';
  aggrMethiod: string = 'max';
  aggrPeriod: string = 'hour';
  dateFrom: string = '2021-02-08T00:00:00.000Z';
  dateTo: string = '2021-02-08T23:59:59.999Z';
  shortTerm: contextResponsesModel[] = [];

  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute, // Activated route to get the current component's inforamation) {}
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(
        '🚀 ~ file: sf-station.component.ts ~ line 35 ~ SfStationComponent ~ this.route.queryParams.subscribe ~ params',
        params
      );
      this.id = params['id'];
      // if(){
      this.markerService.setFarmStation(environment.farmAPILink);
      this.markerService
        .getFarmByFiwareService(this.id)
        .subscribe((res: SensorModel[]) => {
          console.log('SensorModel: ', res);
          this.sensors = res;
          this.idPart = this.sensors[0].id;
          this.type = this.sensors[0].type;
        });
      //}
      console.log(
        '🚀 ~ file: sf-main.component.ts ~ line 34 ~ SfMainComponent ~ this.route.queryParams.subscribe ~ this.id',
        params
      );

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
        });
    });
    this.pageTitle = this.id;
  }

  backClicked() {
    this._location.back();
  }
}
