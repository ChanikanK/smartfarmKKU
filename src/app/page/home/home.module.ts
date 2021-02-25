import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MapComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  //exports: [MapComponent],
})
export class HomeModule {}
