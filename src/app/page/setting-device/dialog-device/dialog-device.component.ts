import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityTemplateModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-dialog-device',
  templateUrl: './dialog-device-dialog.component.html',
  styleUrls: ['./dialog-device.component.scss'],
})
export class DialogDeviceComponent {
  dialogTitle: string = 'Add Entity Template';
  entity_template!: EntityTemplateModelNew;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefEntityTemplate: MatDialogRef<DialogDeviceComponent>,
  private markerService: MarkerService) {}
  ngOnInit() {
    //////////
    this.dialogTitle = this.data.title;
    if (this.dialogTitle == "Add Entity Template"){
      this.entity_template = new EntityTemplateModelNew();this.entity_template.id = 0;
    } else {
      this.entity_template = this.data.entity_template;
    }
    console.log(this.data)
  }
    clickAddEntityTemplate(){
      if(this.entity_template.id == 0){

      this.markerService.addEntityTemplate(this.entity_template).subscribe(res => {

      this.dialogRefEntityTemplate.close('');
        console.log(res);
      });

    }else{
      this.markerService.editEntityTemplate(this.entity_template).subscribe((res: any) => {

        this.dialogRefEntityTemplate.close('');
          console.log(res);
        });
    }
    }
  }

