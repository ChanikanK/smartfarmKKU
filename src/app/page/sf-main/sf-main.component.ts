import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FarmModel } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-sf-main',
  templateUrl: './sf-main.component.html',
  styleUrls: ['./sf-main.component.scss'],
})
export class SfMainComponent implements OnInit {
  pageTitle = 'Main Page';
  farms: any;
  color = ['#e84824', '#3a0504', '#265444', '#912110', '#1c7855'];
  // params: any;
  id!: string;

  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute // Activated route to get the current component's inforamation) {}
  ) {}

  ngOnInit(): void {
    this.markerService.getFarms().subscribe((res: FarmModel[]) => {
      this.farms = res;
    });

    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });

    this.pageTitle = this.id;
  }
}
