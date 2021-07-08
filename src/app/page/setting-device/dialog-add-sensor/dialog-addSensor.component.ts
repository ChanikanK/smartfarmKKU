import { EntityModelNew, EntityTemplateModelNew, FarmEntityModelNew} from './../../../models/farm-model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-device',
  templateUrl: './dialog-addSensor-dialog.component.html',
  styleUrls: ['./dialog-addSensor.component.scss'],
})
export class DialogAddSensorComponent {
  dialogTitle: string = 'Add Sensors';
  sensors: SensorModelNew[] = [];
  entity_template!: EntityTemplateModelNew;
  selectedItemsList: SensorModelNew[]  = [];

  entity_templates: EntityTemplateModelNew[] = [] ;
  entity: EntityModelNew[] = [] ;
  farm_entity: FarmEntityModelNew[] = [];

  // updateMetadata!: UpdateMetadata;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefAddSensor: MatDialogRef<DialogAddSensorComponent>,
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
  saveSensor(){
    this.markerService.editSensorInTemp( this.sensors,this.entity_template.temp_id).subscribe(res=>{
        this.entity_template = this.data.entity_template;




    this.dialogRefAddSensor.close('');
        console.log(res);
  });
  }

}

