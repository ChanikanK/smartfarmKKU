import { EntityTemplateModelNew } from './../../../models/farm-model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-device',
  templateUrl: './dialog-showSensor-dialog.component.html',
  styleUrls: ['./dialog-showSensor.component.scss'],
})
export class DialogShowSensorComponent {
  dialogTitle: string = 'Show Sensors';
  sensors: SensorModelNew[] = [];
  entity_template!: EntityTemplateModelNew;
  selectedItemsList: SensorModelNew[]  = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefShowSensor: MatDialogRef<DialogShowSensorComponent>,
  private markerService: MarkerService) {}
  ngOnInit() {
    //////////
    this.dialogTitle = this.data.title;
    this.entity_template = this.data.entity_template;
    this.markerService.getSensorEnById(this.entity_template.temp_id).subscribe(res => {
      this.sensors = res.results;

  });
    console.log(this.data)
  }
  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.sensors.filter((value, index) => {
      return value.isChecked
    });
  }
  closeSensor(){
    this.dialogRefShowSensor.close('');
  };

}

