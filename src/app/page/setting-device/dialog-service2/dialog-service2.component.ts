import { attributeDetail, EntityModelNew, DeviceService, DeviceServiceDetail, EntityTemplateModelNew, FarmModelNew, SensorModelNew, subscriptions, attrsDetail, entities_subject, value_url, entities_subjectDetail, detail_notification } from './../../../models/farm-model';
import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FarmEntityModelNew } from "src/app/models/farm-model";
import { MarkerService } from "src/app/services/marker.service";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
// for table 5
@Component({
  selector: 'app-dialog-service2',
  templateUrl: './dialog-service2-dialog.component.html',
  styleUrls: ['./dialog-service2.component.scss']
})
export class DialogServiceComponent2 {
  dialogTitle: string = 'Add Farm Entity';
  farms: FarmModelNew[] = [];
  entitiess: EntityModelNew[] = [];
  farm_entity!: FarmEntityModelNew;
  farms_entities: FarmEntityModelNew[] = [];


  entity!: EntityModelNew;
  entityDetail!: DeviceServiceDetail;

  sensors: SensorModelNew[] = [];
  entitys!: DeviceService;
  attributes!: attributeDetail;
  entity_sensors!: EntityTemplateModelNew;
  farm!: FarmModelNew;

  subscriptions!: subscriptions;
  attrsDetail!: attrsDetail;
  entities_subjectDetail!: entities_subjectDetail;
  subject!: entities_subject;
  notification!: detail_notification;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRefFarmEntity: MatDialogRef<DialogServiceComponent2>,
    private markerService: MarkerService) { }
  ngOnInit() {
    //////////
    this.dialogTitle = this.data.title;
    if (this.dialogTitle == "Add Farm Entity") {
      this.farm_entity = new FarmEntityModelNew(); this.farm_entity.id = 0;
      this.entity = new EntityModelNew();
      this.entity.id = 0;
    } else {
      this.farm_entity = this.data.farm_entity;
      // this.entity = this.data.entity;
    }
    console.log(this.data)

    this.markerService.getFarmNew().subscribe(res => {
      this.farms = res.results;

    });

    this.markerService.getEntityNew().subscribe(res => {
      this.entitiess = res.results;

    });
  }
  clickAddFarmEntity() {
    if (this.farm_entity.id == 0) {

      this.markerService.addFarmEntity(this.farm_entity).subscribe(res => {
        // debugger;
        this.subscriptions = new subscriptions();
        this.subscriptions.description = "Notify me of all product price changes";
        this.subscriptions.subject = new entities_subject();
        this.entities_subjectDetail = new entities_subjectDetail();
        this.subscriptions.subject.entities = [];

        this.entities_subjectDetail.idPattern = this.farm_entity.entity_id;
        this.entities_subjectDetail.type = this.entity.temp_id;
        this.subscriptions.subject.entities.push(this.entities_subjectDetail);


        this.entitys = new DeviceService();
        this.entitys.devices = [];
        this.entityDetail = new DeviceServiceDetail;
        this.entityDetail.attributes = [];

        this.markerService.getEnById(this.farm_entity.entity_id).subscribe(res => {
          this.entity = res.data;
          this.markerService.getSensorEnById(this.entity.temp_id).subscribe(res => {
            this.sensors = res.results;
            console.log(this.sensors);
            this.subscriptions.notification = new detail_notification();
            this.subscriptions.notification.attrs = [];
            for (var i = 0; i < this.sensors.length; i++) {
              if (this.sensors[i].isChecked) {


                this.attrsDetail = new attrsDetail();
                // this.attrsDetail.sensor_name = new attrsDetail();
                this.attrsDetail.sensor_name = this.sensors[i].sensor_name;
                this.subscriptions.notification.attrs.push(this.attrsDetail.sensor_name);

                this.attributes = new attributeDetail();
                this.attributes.object_id = this.sensors[i].sensor_id;
                this.attributes.name = this.sensors[i].sensor_name;
                this.attributes.type = this.sensors[i].datatype;
                this.entityDetail.attributes.push(this.attributes);
              }
            }


            this.entityDetail.device_id = this.entity.entity_id;
            this.entityDetail.entity_name = this.entity.entity_name;
            this.entityDetail.entity_type = this.entity.entity_name;
            this.entityDetail.timezone = "Asia/Bangkok";
            this.entitys.devices.push(this.entityDetail);

            var _farmen = this.farm_entity;
            const farmSelect = this.farms.filter(function (farm) {
              return farm.farm_id == _farmen.farm_id;
            });
            this.farm_entity.farm_name = farmSelect.length > 0 ? farmSelect[0].farm_name : '';
            this.markerService.addDevices(this.entitys, this.farm_entity.farm_name).subscribe(res2 => {
              console.log(res2);

            });

            //this.subscriptions.notification = new detail_notification();
            this.subscriptions.notification.http = new value_url();
            this.subscriptions.notification.http.url = "http://quantumleap:8668/v2/notify";
            this.markerService.subscriptions(this.subscriptions, this.farm_entity.farm_name).subscribe(res3 => {
              console.log(res3);
              this.addMetaData();
              this.dialogRefFarmEntity.close('');
            })
          })


        });


        console.log(res);
      });

    } else {
      this.markerService.editFarmEntity(this.farm_entity).subscribe((res: any) => {
        this.subscriptions = new subscriptions();
        this.subscriptions.description = "Notify me of all product price changes";
        this.subscriptions.subject = new entities_subject();
        this.entities_subjectDetail = new entities_subjectDetail();
        this.subscriptions.subject.entities = [];

        this.entities_subjectDetail.idPattern = this.farm_entity.entity_id;
        this.entities_subjectDetail.type = this.entity.temp_id;
        this.subscriptions.subject.entities.push(this.entities_subjectDetail);


        this.entitys = new DeviceService();
        this.entitys.devices = [];
        this.entityDetail = new DeviceServiceDetail;
        this.entityDetail.attributes = [];

        this.markerService.getEnById(this.farm_entity.entity_id).subscribe(res => {
          this.entity = res.data;
          this.markerService.getSensorEnById(this.entity.temp_id).subscribe(res => {
            this.sensors = res.results;
            console.log(this.sensors);
            this.subscriptions.notification = new detail_notification();
            this.subscriptions.notification.attrs = [];
            for (var i = 0; i < this.sensors.length; i++) {
              if (this.sensors[i].isChecked) {


                this.attrsDetail = new attrsDetail();
                // this.attrsDetail.sensor_name = new attrsDetail();
                this.attrsDetail.sensor_name = this.sensors[i].sensor_name;
                this.subscriptions.notification.attrs.push(this.attrsDetail.sensor_name);

                this.attributes = new attributeDetail();
                this.attributes.object_id = this.sensors[i].sensor_id;
                this.attributes.name = this.sensors[i].sensor_name;
                this.attributes.type = this.sensors[i].datatype;
                this.entityDetail.attributes.push(this.attributes);
              }
            }


            this.entityDetail.device_id = this.entity.entity_id;
            this.entityDetail.entity_name = this.entity.entity_name;
            this.entityDetail.entity_type = this.entity.entity_name;
            this.entityDetail.timezone = "Asia/Bangkok";
            this.entitys.devices.push(this.entityDetail);

            var _farmen = this.farm_entity;
            const farmSelect = this.farms.filter(function (farm) {
              return farm.farm_id == _farmen.farm_id;
            });
            this.farm_entity.farm_name = farmSelect.length > 0 ? farmSelect[0].farm_name : '';
            this.markerService.addDevices(this.entitys, this.farm_entity.farm_name).subscribe(res2 => {
              console.log(res2);

            });

            //this.subscriptions.notification = new detail_notification();
            this.subscriptions.notification.http = new value_url();
            this.subscriptions.notification.http.url = "http://quantumleap:8668/v2/notify";
            this.markerService.subscriptions(this.subscriptions, this.farm_entity.farm_name).subscribe(res3 => {
              console.log(res3);
              this.addMetaData();
              this.dialogRefFarmEntity.close('');
            })
          })


        });


        console.log(res);
      });
    }
  }

  addMetaData() {
    var jsonString = '{';
    for (var i = 0; i < this.sensors.length; i++) {
      if (this.sensors[i].isChecked) {
        jsonString += this.getSensorJsonString(this.sensors[i]);

      }
    }
    jsonString += this.getMounting(this.farm_entity.install);

    jsonString += '}';
    console.log(jsonString);
    var _en = this.farm_entity;
    const enSelect = this.entitiess.filter(function (en) {
      return en.entity_id == _en.entity_id;
    });
    this.farm_entity.entity_name = enSelect.length > 0 ? enSelect[0].entity_name : '';
    this.markerService.updateMetadata(jsonString, this.farm_entity.entity_name, this.farm_entity.farm_name).subscribe(res2 => {


      console.log(res2);
    })
  }
  getSensorJsonString(sensor: SensorModelNew) {
    return '"' + sensor.sensor_name + '": {' +
      '"value": 0.00,' +
      '"metadata": {' +
      '       "name": {' +
      '           "value": "' + sensor.sensor_name_thai + '"' +
      '               },' +
      '       "ranges": {' +
      '           "value": {' +
      '               "max": ' + sensor.max + ',' +
      '               "min": ' + sensor.min +
      '                     }' +
      '               },' +
      '       "unit": {' +
      '           "value": "' + sensor.unit + '"' +
      '               }' +
      '                             }' +

      '},';
  }
  getMounting(install: string) {
    if (install=="In-Door") {
      return '        "mounting_point": {' +
      '           "value": "' + install + '"' +
      '               },' +
      '        "mounting_point_name": {' +
      '           "value": "' + "ภายใน" + '"}'
    } else {
      return '        "mounting_point": {' +
      '           "value": "' + install + '"' +
      '               },' +
      '        "mounting_point_name": {' +
      '           "value": "' + "ภายนอก" + '"}'
    }

  }
}
