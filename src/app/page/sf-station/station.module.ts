import { SfStationComponent } from './sf-station.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range/date-range.component';
import { SensorComponent } from './sensor/sensor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { GaugeModule } from 'angular-gauge';
import { GaugesComponent } from './gauges/gauges.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartTimeComponent } from './line-chart-time/line-chart-time.component';
import { MatNativeDateModule } from '@angular/material/core';
// import { SearchFarmComponent } from './search-farm/search-farm.component';

@NgModule({
  declarations: [
    SfStationComponent,
    DateRangeComponent,
    GaugesComponent,
    LineChartTimeComponent,
    SensorComponent,
    // SearchFarmComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    GaugeModule.forRoot(),
    ChartsModule,
  ],
})
export class StationModule {}
