import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkerService } from 'src/app/services/marker.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sf-station',
  templateUrl: './sf-station.component.html',
  styleUrls: ['./sf-station.component.scss']
})
export class SfStationComponent implements OnInit {
  pageTitle = "Station";
  id!: string;

  constructor(private markerService: MarkerService,
    private route: ActivatedRoute, // Activated route to get the current component's inforamation) {}
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      console.log("🚀 ~ file: sf-main.component.ts ~ line 34 ~ SfMainComponent ~ this.route.queryParams.subscribe ~ this.id", params)
    });

    this.pageTitle = this.id;
  }

  backClicked() {
    this._location.back();
  }

}
