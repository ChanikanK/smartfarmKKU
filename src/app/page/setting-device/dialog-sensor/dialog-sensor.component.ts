import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-sensor',
  templateUrl: './dialog-sensor.component.html',
  styleUrls: ['./dialog-sensor.component.scss'],
})
export class DialogSensorComponent {
  dialogTitle: string = 'Add Sensor';
  sensor!: SensorModelNew;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefSensor: MatDialogRef<DialogSensorComponent>,
  private markerService: MarkerService) {}
  ngOnInit() {
    // will log the entire data object
    this.dialogTitle = this.data.title;
    if(this.dialogTitle == "Add Sensor"){
      this.sensor = new SensorModelNew();this.sensor.id = 0;
    } else {
      this.sensor = this.data.sensor;
    }
    console.log(this.data)
  }
  clickAddSensor(){
    if(this.sensor.id == 0){

    this.markerService.addSensor(this.sensor).subscribe(res => {

    this.dialogRefSensor.close('');
      console.log(res);
    });

  }else{
    this.markerService.editSensor(this.sensor).subscribe(res => {
      this.dialogRefSensor.close('');
        console.log(res);
      });
  }
  }
}
