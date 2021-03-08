import { SensorModel, SensorRePackModel } from './../../../models/farm-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss'],
})
export class SensorComponent implements OnInit {
  @Input() sensor!: SensorModel;
  neededArray: SensorRePackModel[] = [];
  constructor() {}

  ngOnInit(): void {
    // Step 1. Get all the object keys.
    let sensorProperties = Object.keys(this.sensor);

    // Step 2. Create an empty array.
    this.neededArray = [];

    // Step 3. Iterate throw all keys.
    let i = 0;
    for (let prop of sensorProperties) {
      console.log(prop);
      // this.neededArray.push(this.sensor[prop]);
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
    console.log(this.neededArray);
  }

  getNameKey(sensor: SensorModel, index: number) {
    Object.keys(sensor)[index];
  }
}
