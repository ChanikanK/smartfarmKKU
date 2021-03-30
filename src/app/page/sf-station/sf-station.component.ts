import {
  SensorModel,
  contextResponsesModel,
  FarmModel,
} from './../../models/farm-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

interface TimeRange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sf-station',
  templateUrl: './sf-station.component.html',
  styleUrls: ['./sf-station.component.scss'],
})
export class SfStationComponent implements OnInit {
  pageTitle = 'Station';
  id!: string;
  sensors: SensorModel[] = [];
  farms!: FarmModel[];
  timeRange: TimeRange[] = [
    { value: 'hour', viewValue: 'Hour' },
    { value: 'day', viewValue: 'Day' },
    { value: 'month', viewValue: 'Month' },
  ];
  selectedRange = this.timeRange[0].value;
  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute, // Activated route to get the current component's inforamation) {}
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.markerService.setFarmStation(environment.farmAPILink);
      this.markerService
        .getFarmByFiwareService(this.id)
        .subscribe((res: SensorModel[]) => {
          console.log('SensorModel: ', res);
          this.sensors = res;
        });
      this.pageTitle = this.id;

      // just for calling the farm name. should be edit later.
      this.markerService.getFarms().subscribe((res: FarmModel[]) => {
        this.farms = res;
        for (let i = 0; i < this.farms.length; i++) {
          if (this.farms[i].fiware_service != undefined) {
            if (this.farms[i].fiware_service.value == this.id) {
              this.pageTitle = this.farms[i].name.value;
            }
          }
        }
      });
    });
  }

  backClicked() {
    this._location.back();
  }
}
