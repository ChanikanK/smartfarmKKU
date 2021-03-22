import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FarmModel } from 'src/app/models/farm-model';
import { MarkerService } from 'src/app/services/marker.service';
import { environment } from 'src/environments/environment';

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
  type!: string;
  firstIndex = 0;

  constructor(
    private markerService: MarkerService,
    private route: ActivatedRoute, // Activated route to get the current component's inforamation) {}
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
    });
    this.pageTitle = this.id;
    this.markerService.setFarmStation(
      environment.farmAPILink + '?type=' + this.type
    );
    this.markerService.getFarms().subscribe((res: FarmModel[]) => {
      this.farms = res;
      console.log("🚀 FarmModel", res)
      for (let i = 0; i < this.farms.length; i++) {
        if (this.farms[i].name) {
          this.firstIndex = i;
          break;
        }
      }
    });

  }

  clickStation(name: string) {
    this.router.navigateByUrl('/pages/station?id=' + name);
  }
}
