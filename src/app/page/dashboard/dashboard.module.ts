import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule],
  exports: [MapComponent],
})
export class DashboardModule {}
