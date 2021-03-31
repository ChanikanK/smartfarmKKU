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
// import { SensorComponent } from './sf-station/sensor/sensor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { GaugesComponent } from './sf-station/gauges/gauges.component';
import { Component } from '@angular/core';
// import { GaugeModule } from 'angular-gauge';
// import { LineChartTimeComponent } from './sf-station/line-chart-time/line-chart-time.component';
// import { DialogDeviceComponent } from './setting-device/dialog-device/dialog-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
// import { DualListboxComponent } from './sf-station/dual-listbox/dual-listbox.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UserLoginComponent } from './user-login/user-login.component';
// import { DateRangeComponent } from './sf-station/date-range/date-range.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SettingDeviceComponent } from './setting-device/setting-device.component';
import { StationModule } from './sf-station/station.module';
import { SettingDeviceModule } from './setting-device/setting-device.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    PageComponent,
    SfMainComponent,
    // SfStationComponent,
    SfStationCardComponent,
    SearchFarmComponent,
    // SensorComponent,
    // GaugesComponent,
    // LineChartTimeComponent,
    // SettingDeviceComponent,
    // DialogDeviceComponent,
    // DualListboxComponent,
    UserLoginComponent,
    // DateRangeComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    DashboardModule,
    HomeModule,
    // ChartsModule,
    HttpClientModule,
    // GaugeModule.forRoot(),
    StationModule,
    MatDialogModule,
    // AngularDualListBoxModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    // MatDatepickerModule,
    SettingDeviceModule,
    MatIconModule
  ],
})
export class PageModule {}
