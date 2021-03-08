import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmModel } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-search-farm',
  templateUrl: './search-farm.component.html',
  styleUrls: ['./search-farm.component.scss'],
})
export class SearchFarmComponent implements OnInit {
  farms: any;
  id!: string;

  constructor(
    private markerService: MarkerService // ,
  ) // private route: ActivatedRoute // Activated route to get the current component's inforamation) {}
  {}

  ngOnInit(): void {
    this.markerService.getFarms().subscribe((res: FarmModel[]) => {
      this.farms = res;
    });

    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        let value: string = <string>$(this).val();
        let lower = value.toLowerCase();
        console.log(
          '🚀 ~ file: search-farm.component.ts ~ line 29 ~ SearchFarmComponent ~ $ ~ val',
          lower
        );
        function isSame(element: string, index: any, array: any) {
          return element;
        }
        // let li = $('#myList li');
        // li.filter(()=>{
        //   return $(this).toggle($(this).text().toLowerCase().indexOf(lower) > -1)
        // });

        // console.log("🚀 ~ file: search-farm.component.ts ~ line 34 ~ SearchFarmComponent ~ li", li)

        // $("#myList li").filter(function() {
        //   return !$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        // });
      });
    });

    // this.route.queryParams.subscribe((params) => {
    //   this.id = params['id'];
    // });
  }
}
