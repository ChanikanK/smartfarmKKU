import { DialogSensorComponent } from './dialog-sensor/dialog-sensor.component';
import { EntityModelNew, EntityTemplateModelNew, FarmEntityModelNew, FarmModelNew } from './../../models/farm-model';
import { Component, OnInit } from '@angular/core';
import { SensorModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceComponent } from './dialog-device/dialog-device.component';
import { DialogDeviceComponent2 } from './dialog-device2/dialog-device2.component';
import { DialogServiceComponent } from './dialog-service/dialog-service.component';
import { DialogServiceComponent2 } from './dialog-service2/dialog-service2.component';
import { DialogAddSensorComponent } from './dialog-add-sensor/dialog-addSensor.component';
import { DialogAddEntityToFarmComponent } from './dialog-add-entity-to-farm/dialog-addEntityTofarm.component';
import { DialogShowSensorComponent } from './dialog-show-sensor/dialog-showSensor.component';

@Component({
  selector: 'app-setting-device',
  templateUrl: './setting-device.component.html',
  styleUrls: ['./setting-device.component.scss']
})
export class SettingDeviceComponent implements OnInit {
  pageTitle = 'Setting';
  sensors : SensorModelNew[] = [];
  entity_templates : EntityTemplateModelNew [] = [];
  entities : EntityModelNew [] = [];
  farms : FarmModelNew [] = [];
  farms_entities : FarmEntityModelNew [] = [];


  constructor(
    public dialog: MatDialog,
    private markerService: MarkerService
  ) { }

  ngOnInit(): void {
    this.markerService.getSensorNew().subscribe(res => {
        this.sensors = res.results;

    });
    this.markerService.getEntityTemplateNew().subscribe( res => {
        this.entity_templates = res.results;
    });
    this.markerService.getEntityNew().subscribe( res => {
        this.entities = res.results;
    });
    this.markerService.getFarmNew().subscribe( res => {
        this.farms = res.results;
    });
    this.markerService.getFarmEntityNew().subscribe( res => {
        this.farms_entities = res.results;
    });
  }

  deleteSensor(sensor: SensorModelNew){
    if (confirm('Are you sure you want to delete this?')) {
      this.markerService.deleteSensor(sensor).subscribe(res => {
        this.markerService.getSensorNew().subscribe(res => {
          this.sensors = res.results;

      });

    });
    }
  }

  deleteEntityTemplate(entity_template: EntityTemplateModelNew){
   console.log(entity_template);
    if (confirm('Are you sure you want to delete this?')) {
      this.markerService.deleteEntityTemplate(entity_template).subscribe(res => {
        this.markerService.getEntityTemplateNew().subscribe(res => {
          this.entity_templates = res.results;

      });

    });
    }
  }

  deleteEntity(entity: EntityModelNew){
    if (confirm('Are you sure you want to delete this?')) {
      this.markerService.deleteEntity(entity).subscribe(res => {
        this.markerService.getEntityNew().subscribe(res => {
          this.entities = res.results;

      });

    });
    }
  }

  deleteFarm(farm: FarmModelNew){
    if (confirm('Are you sure you want to delete this?')) {
      this.markerService.deleteFarm(farm).subscribe(res => {
        this.markerService.getFarmNew().subscribe(res => {
          this.farms = res.results;

      });

    });
    }
  }

  deleteFarmEntity(farm_entity: FarmEntityModelNew){
    if (confirm('Are you sure you want to delete this?')) {
      this.markerService.deleteFarmEntity(farm_entity).subscribe(res => {
        this.markerService.getFarmEntityNew().subscribe(res => {
          this.farms_entities = res.results;

      });

    });
    }
  }

  editSensor(sensor: SensorModelNew){
    let dialogRef = this.dialog.open(DialogSensorComponent, {
      data: {
        title: 'Edit Sensor',
        sensor: sensor,

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getSensorNew().subscribe(res => {
        this.sensors = res.results;

    });
    });
  }

  editEntityTemplate(entity_template: EntityTemplateModelNew){
    let dialogRef = this.dialog.open(DialogDeviceComponent, {
      data: {
        title: 'Edit Entity Template',
        entity_template: entity_template,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getEntityTemplateNew().subscribe(res => {
        this.entity_templates = res.results;
    });
    });
  }

  editEntity(entity: EntityModelNew){
    let dialogRef = this.dialog.open(DialogDeviceComponent2, {
      data: {
        title: 'Edit Entity',
        entity: entity,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getEntityNew().subscribe(res => {
        this.entities = res.results;
    });
    });
  }

  editFarm(farm: FarmModelNew){
    let dialogRef = this.dialog.open(DialogServiceComponent, {
      data: {
        title: 'Edit Farm',
        farm: farm,

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getFarmNew().subscribe(res => {
        this.farms = res.results;

    });
    });
  }

  editFarmEntity(farm_entity: FarmEntityModelNew){
    let dialogRef = this.dialog.open(DialogServiceComponent2, {
      data: {
        title: 'Edit Farm',
        farm_entity: farm_entity,

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getFarmEntityNew().subscribe(res => {
        this.farms_entities = res.results;

    });
    });
  }

  openDialog1() {
    //sensor dialog
    let dialogRef = this.dialog.open(DialogSensorComponent, {
      data: {
        title: 'Add Sensor',

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getSensorNew().subscribe(res => {
        this.sensors = res.results;
    });
    });
  }

  openDialog2() {
    //Entity Template dialog
    let dialogRef = this.dialog.open(DialogDeviceComponent, {
      data: {
        title: 'Add Entity Template',

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getEntityTemplateNew().subscribe(res => {
        this.entity_templates = res.results;

    });
    });

  }

  openDialog3() {
    //Entity dialog
    let dialogRef = this.dialog.open(DialogDeviceComponent2, {
      data: {
        title: 'Add Entity',

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getEntityNew().subscribe(res => {
        this.entities = res.results;

    });
    });

  }

  openDialog4() {
    //farm dialog
    let dialogRef = this.dialog.open(DialogServiceComponent, {
      data: {
        title: 'Add Farm',

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getFarmNew().subscribe(res => {
        this.farms = res.results;
    });
    });
  }

  openDialog5() {
    //farm entity dialog
    let dialogRef = this.dialog.open(DialogServiceComponent2, {
      data: {
        title: 'Add Farm Entity',

      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.markerService.getFarmEntityNew().subscribe(res => {
        this.farms_entities = res.results;
    });
    });
  }

  openDialogAddSensor(entity_template: EntityTemplateModelNew) {
    //add sensor
    let dialogRef = this.dialog.open(DialogAddSensorComponent, {
      data: {
        title: 'Add Sensors',
        entity_template:entity_template,
      },
    });

    dialogRef.afterClosed().subscribe(result => {

    this.markerService.getEntityTemplateNew().subscribe( res => {
      this.entity_templates = res.results;
  });
    });
  }

  openDialogShowSensor(entity_template: EntityTemplateModelNew) {
    //add sensor
    let dialogRef = this.dialog.open(DialogShowSensorComponent, {
      data: {
        title: 'Detail Sensors in '+ entity_template.temp_name,
        entity_template:entity_template,
      },
    });
  }

  // openDialogAddEntityToFarm(entity: EntityModelNew) {
  //   //add entity to farm
  //   let dialogRef = this.dialog.open(DialogAddEntityToFarmComponent, {
  //     data: {
  //       title: 'Add Entity To Farm',
  //       entity:entity,
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {

  //   this.markerService.getEntityNew().subscribe( res => {
  //     this.entities = res.results;
  // });
  //   });
  // }
  // addSensor(): void {
  //   this.markerService.getSensorDialogNew().subscribe( res =>{
  //       this.sensorsDialog = res.results;
  //   })
  // }
}
// @Component({
//   selector: 'app-setting-device2',
//   templateUrl: './setting-device.component.html',
//   styleUrls: ['./setting-device.component.scss']
// })
// export class SettingDeviceComponent2 implements OnInit {
//   pageTitle = 'Setting';

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

