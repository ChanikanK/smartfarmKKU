import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { SearchFarmComponent } from './search-farm/search-farm.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapComponent, HomeComponent, SearchFarmComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  //exports: [MapComponent],
})
export class HomeModule {}
