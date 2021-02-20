import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentLocation = {
    latitude: -11.2135,
    longitude: 17.8770
  };

  datapath = "./assets/data/data1.json";

}
