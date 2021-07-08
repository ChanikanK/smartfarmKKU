import { attributeDetail, DeviceService, DeviceServiceDetail } from './../../../models/farm-model';
import { Attribute, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityModelNew, EntityTemplateModelNew, SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-dialog-device2-dialog',
  templateUrl: './dialog-device2-dialog.component.html',
  styleUrls: ['./dialog-device2.component.scss'],
})
export class DialogDeviceComponent2 {
  dialogTitle: string = 'Add Entity';
  entity!: EntityModelNew;
  entity_templates : EntityTemplateModelNew [] = [];


  entitys!: DeviceService;
  entityDetail!: DeviceServiceDetail;
  attributes!: attributeDetail;

  sensors: SensorModelNew[] = [];
  entity_sensors!: EntityTemplateModelNew;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRefEntity: MatDialogRef<DialogDeviceComponent2>,
  private markerService: MarkerService) {}
  ngOnInit() {
    //////////
    this.dialogTitle = this.data.title;
    if (this.dialogTitle == "Add Entity"){
      this.entity = new EntityModelNew();this.entity.id = 0;
    } else {
      this.entity = this.data.entity;
    }
    // this.markerService.getSensorEnById(this.entity_sensors).subscribe(res => {
    //   this.sensors = res.results;
    // });
    this.markerService.getEntityTemplateNew().subscribe(res => {
      this.entity_templates = res.results;
    });
    console.log(this.data)
  }
    clickAddEntity(){
      if(this.entity.id == 0){
      this.markerService.addEntity(this.entity).subscribe(res => {

          // this.entitys = new DeviceService();
          // this.entitys.devices = [];
          // this.entityDetail = new DeviceServiceDetail;
          // this.entityDetail.attributes = [];

          // // this.entity_sensors = new EntityTemplateModelNew();
          // // this.attributes.object_id = "Tempurature"
          // // this.attributes.name = "Tempurature"
          // // this.attributes.type = "Integer"
          // this.markerService.getSensorEnById(this.entity.temp_id).subscribe(res => {
          //   this.sensors = res.results;
          //   console.log(  this.sensors);
          //   for(var i = 0;i < this.sensors.length;i++){
          //     if(this.sensors[i].isChecked){
          //       this.attributes = new attributeDetail;
          //       this.attributes.object_id = this.sensors[i].sensor_id;
          //       this.attributes.name = this.sensors[i].sensor_name;
          //       this.attributes.type = this.sensors[i].datatype;
          //       this.entityDetail.attributes.push(this.attributes);
          //     }
          //   }
          //   this.entityDetail.device_id = this.entity.entity_id;
          //   this.entityDetail.entity_name = this.entity.entity_name;
          //   this.entityDetail.entity_type = this.entity.entity_name;
          //   this.entityDetail.timezone = "Asia/Bangkok";



          //   this.entitys.devices.push(this.entityDetail);

          //   this.markerService.addDevices(this.entitys, this.entity.entity_name).subscribe(res2 => {
          //     console.log(res2);
          //     this.dialogRefEntity.close('');
          //   });
          // });
          this.dialogRefEntity.close('');
          console.log(this.attributes);

        console.log(res);
      });


    }else{
      this.markerService.editEntity(this.entity).subscribe((res: any) => {

        this.dialogRefEntity.close('');
          console.log(res);
        });
    }
    }
  }

