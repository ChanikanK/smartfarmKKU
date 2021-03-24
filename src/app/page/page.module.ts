import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { SfMainComponent } from './sf-main/sf-main.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { SfStationComponent } from './sf-station/sf-station.component';
import { SfStationCardComponent } from './sf-station-card/sf-station-card.component';
import { SearchFarmComponent } from './search-farm/search-farm.component';
import { HomeModule } from './home/home.module';
import { SensorComponent } from './sf-station/sensor/sensor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaugesComponent } from './gauges/gauges.component';
import { Component } from '@angular/core';
import { GaugeModule } from 'angular-gauge';
import { LineChartTimeComponent } from './sf-station/line-chart-time/line-chart-time.component';
import { SettingDeviceComponent } from './setting-device/setting-device.component';
import { DialogDeviceComponent } from './dialog-device/dialog-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DualListboxComponent } from './dual-listbox/dual-listbox.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    PageComponent,
    SfMainComponent,
    SfStationComponent,
    SfStationCardComponent,
    SearchFarmComponent,
    SensorComponent,
    GaugesComponent,
    LineChartTimeComponent,
    SettingDeviceComponent,
    DialogDeviceComponent,
    DualListboxComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    DashboardModule,
    HomeModule,
    ChartsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatDialogModule,
    AngularDualListBoxModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
})
export class PageModule {}
