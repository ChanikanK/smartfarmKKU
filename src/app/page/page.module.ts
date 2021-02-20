import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { SfMainComponent } from './sf-main/sf-main.component';
import { BarChartComponent } from './chart/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { SfStationComponent } from './sf-station/sf-station.component';
import { SfStationCardComponent } from './sf-station-card/sf-station-card.component';
import { SearchFarmComponent } from './search-farm/search-farm.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PageComponent,
    HomeComponent,
    SfMainComponent,
    BarChartComponent,
    SfStationComponent,
    SfStationCardComponent,
    SearchFarmComponent

  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    DashboardModule,
    ChartsModule,
    HttpClientModule,
  ],
})
export class PageModule {}
