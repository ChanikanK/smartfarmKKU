import { EntityInFarmService, FarmService, FarmServiceDetail, FarmName, valueName, valueFiware_service, valueGeo, valueInfo, value_name_valueInfo, name_valueInfo, valueFiware_servicepath } from './../../../models/farm-model';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FarmModelNew } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service-dialog.component.html',
  styleUrls: ['./dialog-service.component.scss']
})
export class DialogServiceComponent {
  dialogTitle: string = 'Add Farm';
  farm!: FarmModelNew;
  farms!: FarmService;

  farmDetail!: FarmServiceDetail;
  entityInFarm!: EntityInFarmService;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRefFarm: MatDialogRef<DialogServiceComponent>,
    private markerService: MarkerService) { }
  ngOnInit() {
    //////////
    this.dialogTitle = this.data.title;
    if (this.dialogTitle == "Add Farm") {
      this.farm = new FarmModelNew(); this.farm.id = 0;
    } else {
      this.farm = this.data.farm;
    }
    console.log(this.data)
  }
  clickAddFarm() {
    if (this.farm.id == 0) {
      var apiKey = this.farm.farm_id + this.farm.farm_name + this.farm.owner + '-' + Math.floor(Math.random() * 1000000001);;
      this.farm.apiKey = apiKey;
      this.markerService.addFarm(this.farm).subscribe(res => {
        this.farms = new FarmService();
        this.farms.services = [];
        this.farmDetail = new FarmServiceDetail();
        this.farmDetail.apikey = apiKey; // console.log("gg",this.farmDetail.apikey);
        this.farmDetail.cbroker = "http://orion:1026";
        this.farmDetail.entity_type = this.farm.farm_id;
        this.farmDetail.resource = "/iot/json";

        this.farms.services.push(this.farmDetail);
        this.markerService.addFarms(this.farms, this.farm.farm_name).subscribe(res2 => {

          console.log(res2);
        });

        this.entityInFarm = new EntityInFarmService();
        this.entityInFarm.type = this.farm.farm_name;
        this.entityInFarm.id = this.farm.farm_id;

        this.entityInFarm.name = new valueName();
        this.entityInFarm.fiware_service = new valueFiware_service();
        this.entityInFarm.fiware_servicepath = new valueFiware_servicepath();
        this.entityInFarm.geo = new valueGeo();

        this.entityInFarm.info = new valueInfo();
        this.entityInFarm.info.value = new name_valueInfo();
        this.entityInFarm.info.value.name = new value_name_valueInfo();
        this.entityInFarm.info.value.name.value = new value_name_valueInfo();


        this.entityInFarm.name.value = this.farm.farm_id;
        this.entityInFarm.fiware_service.value = this.farm.farm_id;
        this.entityInFarm.fiware_servicepath.value = "/";
        this.entityInFarm.geo.value = this.farm.lati, this.farm.long;
        this.entityInFarm.info.value.name.value = this.farm.farm_id;

        this.markerService.addEntityInFarmService(this.entityInFarm, this.farm.farm_name).subscribe(res3 => {
          console.log("this ", res3);
          this.dialogRefFarm.close('');
        })

        console.log(res);
      });


    } else {
      this.markerService.editFarm(this.farm).subscribe((res: any) => {

        this.dialogRefFarm.close('');
        console.log(res);
      });
    }
  }
}


    // this.dialog.open(DialogServiceComponentDialog, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  // }

// }
// }
// @Component({
//   selector: 'app-dialog-service',
//   templateUrl: './dialog-service-dialog.component.html',
//   styleUrls: ['./dialog-service.component.scss']
// })

// export class DialogServiceComponentDialog {
//   dialogTitle: string = 'Create Farm';
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }

// for table 5
// @Component({
//   selector: 'app-dialog-service2',
//   templateUrl: './dialog-service2.component.html',
//   styleUrls: ['./dialog-service2.component.scss']
// })
// export class DialogServiceComponent2{

//   constructor(public dialog: MatDialog) {}

//   openDialog() {
//     this.dialog.open(DialogServiceComponentDialog2, {
//       data: {
//         animal: 'panda',
//       },
//     });
//   }

// }

// @Component({
//   selector: 'app-dialog-service2',
//   templateUrl: './dialog-service2-dialog.component.html',
//   styleUrls: ['./dialog-service2.component.scss']
// })

// export class DialogServiceComponentDialog2 {
//   dialogTitle: string = 'Create Relationship';
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }
