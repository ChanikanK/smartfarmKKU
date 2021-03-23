import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.value = this.inputValue;
    this.max = this.inputMax;
    this.min = this.inputMin;
  }
}
