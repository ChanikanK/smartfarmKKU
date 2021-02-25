import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [MapComponent, DashboardComponent, BarChartComponent],
  imports: [CommonModule, ChartsModule],
  //exports: [MapComponent],
})
export class DashboardModule {}
