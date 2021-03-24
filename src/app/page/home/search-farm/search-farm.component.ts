// import { FarmName } from './../../models/farm-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmModel } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-farm',
  templateUrl: './search-farm.component.html',
  styleUrls: ['./search-farm.component.scss'],
})
export class SearchFarmComponent implements OnInit {
  farms!: FarmModel[];
  // farmsOld!: FarmModel[];
  // id!: string;
  // textSearch: string = '';

  control = new FormControl();
  farmName: string[] = [];
  filteredFarms!: Observable<string[]>;

  constructor(
    private markerService: MarkerService, // private route: ActivatedRoute // Activated route to get the current component's inforamation) {}
    private router: Router
  ) {}

  ngOnInit(): void {
    this.markerService.getFarms().subscribe((res: FarmModel[]) => {
      this.farms = res;
      console.log('🚀 this.farms', this.farms);
      // this.farmsOld = res;

      for (let i in this.farms) {
        if (this.farms[i].fiware_service != undefined) {
          console.log(this.farms[i].fiware_service.value);
          this.farmName.push(this.farms[i].fiware_service.value);
        }
      }
      console.log('value', this.farmName);
      this.filteredFarms = this.control.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
    });
  }
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.farmName.filter((street) =>
      this._normalizeValue(street).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


  // changeSearchFarm() {
  //   const result = this.farmsOld.filter((s) =>
  //     s.id.toLowerCase().includes(this.textSearch.toLowerCase())
  //   );
  //   this.farms = result;
  // }


  onSelectionStation(event: MatAutocompleteSelectedEvent) {
    this.router.navigateByUrl('/pages/station?id=' + event.option.value);
  }
}
