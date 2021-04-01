import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingDeviceComponent } from './setting-device.component';
import { DualListboxComponent } from './dual-listbox/dual-listbox.component';
import { DialogDeviceComponent } from './dialog-device/dialog-device.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DialogSensorComponent } from './dialog-sensor/dialog-sensor.component';
import { DialogServiceComponent } from './dialog-service/dialog-service.component';

@NgModule({
  declarations: [
    SettingDeviceComponent,
    DualListboxComponent,
    DialogDeviceComponent,
    DialogSensorComponent,
    DialogServiceComponent,
  ],
  imports: [CommonModule, AngularDualListBoxModule],

  exports:[DualListboxComponent, DialogDeviceComponent]
})
export class SettingDeviceModule {}
