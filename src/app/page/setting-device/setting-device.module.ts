import { DialogAddSensorComponent } from './dialog-add-sensor/dialog-addSensor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingDeviceComponent } from './setting-device.component';
import { DualListboxComponent } from './dual-listbox/dual-listbox.component';
import { DialogDeviceComponent } from './dialog-device/dialog-device.component';
import { DialogDeviceComponent2 } from './dialog-device2/dialog-device2.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DialogSensorComponent } from './dialog-sensor/dialog-sensor.component';
import { DialogServiceComponent } from './dialog-service/dialog-service.component';
import { DialogServiceComponent2 } from './dialog-service2/dialog-service2.component'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogAddEntityToFarmComponent } from './dialog-add-entity-to-farm/dialog-addEntityTofarm.component';
import { DialogShowSensorComponent } from './dialog-show-sensor/dialog-showSensor.component';


@NgModule({
  declarations: [
    SettingDeviceComponent,
    // SettingDeviceComponent2,
    DualListboxComponent,
    DialogDeviceComponent,
    DialogDeviceComponent2,
    DialogSensorComponent,
    DialogAddSensorComponent,
    DialogShowSensorComponent,
    DialogAddEntityToFarmComponent,
    DialogServiceComponent,
    DialogServiceComponent2
  ],
  imports: [CommonModule, AngularDualListBoxModule,
    FormsModule],

  exports:[DualListboxComponent, DialogDeviceComponent,DialogAddSensorComponent,DialogShowSensorComponent,DialogDeviceComponent2, DialogServiceComponent, DialogServiceComponent2, DialogAddEntityToFarmComponent]
})
export class SettingDeviceModule {}
