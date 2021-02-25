import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataset: string = './assets/data/data1.json';
  currentLocation = {
    latitude: -11.2135,
    longitude: 17.877,
  };
  constructor() {}

  ngOnInit() {}
}
