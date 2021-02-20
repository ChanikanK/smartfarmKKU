import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sf-station-card',
  templateUrl: './sf-station-card.component.html',
  styleUrls: ['./sf-station-card.component.scss']
})
export class SfStationCardComponent implements OnInit {
  @Input() farmName = "Farm Name";

  constructor() { }

  ngOnInit(): void {
  }

}
