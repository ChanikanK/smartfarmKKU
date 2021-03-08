import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { FarmModel } from '../models/farm-model';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  farmStation: string = 'https://apiweedsmf.kku.ac.th/orion/v2/entities';
  // farmStation: string = 'https://fiwareorion.kku.ac.th/v2/entities?type=SensorWifi';
  // farmStationUrl: string = 'https://domain/v2/entities?type=FarmKKU';

  constructor(private http: HttpClient) {}
  // makeStationMarkers(map: L.Map): Observable<FarmModel[]>{
  //   return this.http.get<FarmModel[]>(this.farmStation)
  //   ;
  // }
  getFarms(): Observable<FarmModel[]> {
    return this.http.get<FarmModel[]>(this.farmStation);
  }

  // getFarm(id:number|string): Observable<FarmModel[]>{
  //   return this.http.get<FarmModel[]>(this.farmStation).filter(
  //     function(product,i){
  //       return product.id == id ? product : null;
  //     }
  //   );
  //   ;
  // }
}
