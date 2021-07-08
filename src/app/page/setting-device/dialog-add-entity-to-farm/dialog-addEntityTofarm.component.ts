import { EntityModelNew, EntityTemplateModelNew, FarmEntityModelNew, FarmModelNew } from '../../../models/farm-model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-add-entity-to-farm',
  templateUrl: './dialog-addEntityToFarm-dialog.component.html',
  styleUrls: ['./dialog-addEntityToFarm.component.scss'],
})
export class DialogAddEntityToFarmComponent {
  dialogTitle: string = 'Add Entity To Farm';
  farms: FarmModelNew[] = [];
  entity!: EntityModelNew;
  selectedItemsList: FarmEntityModelNew[]  = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefAddEntityToFarm: MatDialogRef<DialogAddEntityToFarmComponent>,
  private markerService: MarkerService) {}
//   ngOnInit() {
//     //////////
//     this.dialogTitle = this.data.title;
//     this.entity = this.data.entity;
//     this.markerService.getFarmEnById(this.farms).subscribe(res => {
//       this.entity = res.results;

//   });
//     console.log(this.data)
//   }
//   changeSelection() {
//     this.fetchSelectedItems()
//   }

//   fetchSelectedItems() {
//     this.selectedItemsList = this.entity.filter((value, index) => {
//       return value.isChecked
//     });
//   }
//   saveSensor(){
//     console.log(this.entity);
//   }
//   clickAddSensorToSubmit(){
//   }
}

