import { Component, Input, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss'],
})
export class GaugesComponent implements OnInit {
  value!: number;
  max!: number;
  min!: number;
  @Input() inputValue!: number;
  @Input() inputMax: number = 100;
  @Input() inputMin: number = 0;

  constructor() {}
  meter = "margin-inline: auto;";
  thresholdConfig = {
    '0': {color: '3EC0A8'}
    // '40': {color: 'orange'},
    // '75.5': {color: 'red'}
};



  ngOnInit(): void {
    this.value = this.inputValue;
    this.max = this.inputMax;
    this.min = this.inputMin;
  }
}
