import { FarmModel } from './../../../models/farm-model';
import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { MarkerService } from 'src/app/services/marker.service';

const iconRetinaUrl = 'leaflet/marker-icon-2x.png';
const iconUrl = 'leaflet/marker-icon.png';
const shadowUrl = 'leaflet/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @Input() coordinate = {
    // KKU Coordinate
    latitude: 16.4616037,
    longitude: 102.8173542
  };

  @Input() zoom = 6;

  // Define our base layers so we can reference them multiple times
  streetMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  private map: any;
  private farms!: FarmModel ;
  private initMap(): void {
    this.map = L.map('map', {
      layers: [ this.streetMaps],
      center: [this.coordinate.latitude, this.coordinate.longitude],
      zoom: this.zoom,
    });
  }


  constructor(private markerService: MarkerService) {
  }


  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.getFarms()
    .subscribe((res: FarmModel[]) => {
      console.log(
        '🚀 ~ file: marker.service.ts ~ line 14 ~ MarkerService ~ this.http.get ~ res',
        res
      );
      for (const c of res) {
        const lat = c.geo.value.lat;
        const lon = c.geo.value.lon;
        const name = c.name.value;
        const marker = L.marker([lat, lon]).addTo(this.map).bindTooltip(name);
      }
    })

    // this.markerService.getFarms()
    // .subscribe((res: any) => {
    //   this.farms = res;
    // });
  }

  ngOnDestroy(){
     // On component destroyed leave session
    //  if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

}
