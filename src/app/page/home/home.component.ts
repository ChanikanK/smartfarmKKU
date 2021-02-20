import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmModel } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // currentLocation = {
  //   latitude: 46.8523,
  //   longitude: -121.7603,
  // };

  zoom = 14;
  farms: any;
  color = ['#e84824', '#3a0504', '#265444', '#912110', '#1c7855'];
  id!: string;

  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute // Activated route to get the current component's inforamation) {}
  ) {}

  ngOnInit(): void {
    $(document).ready(function () {
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;
      $('#myCarousel').ready(function () {
        if (totalItems <= itemsPerSlide) {
          $('.carousel-control-prev').addClass('d-none');
          $('.carousel-control-next').addClass('d-none');
          $('#myCarousel').attr('data-interval', 'false');
        }
      });
      $('#myCarousel').on('slide.bs.carousel', function (e: any) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          var it = itemsPerSlide - (totalItems - idx);
          for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == 'left') {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
              $('.carousel-item')
                .eq(0)
                .appendTo($(this).find('.carousel-inner'));
            }
          }
        }
      });
    });

    this.markerService.getFarms().subscribe((res: FarmModel[]) => {
      this.farms = res;
    });

    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
