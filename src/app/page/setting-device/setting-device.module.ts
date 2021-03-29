import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingDeviceComponent } from './setting-device.component';
import { DualListboxComponent } from './dual-listbox/dual-listbox.component';
import { DialogDeviceComponent } from './dialog-device/dialog-device.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@NgModule({
  declarations: [
    SettingDeviceComponent,
    DualListboxComponent,
    DialogDeviceComponent,
  ],
  imports: [CommonModule, AngularDualListBoxModule],

  exports:[DualListboxComponent, DialogDeviceComponent]
})
export class SettingDeviceModule {}
