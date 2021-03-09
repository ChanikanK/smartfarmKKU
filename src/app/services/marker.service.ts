import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import { FarmModel, SensorModel } from '../models/farm-model';
import * as globalVar from 'src/app/globals'

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  farmStation: string = globalVar.farmAPILink;

  constructor(private http: HttpClient) {}
  // makeStationMarkers(map: L.Map): Observable<FarmModel[]>{
  //   return this.http.get<FarmModel[]>(this.farmStation)
  //   ;
  // }

  setFarmStation(val: string){
    this.farmStation = val;
  }

  getFarmStation(val: string){
    return this.farmStation;
  }

  getFarms(): Observable<FarmModel[]> {
    return this.http.get<FarmModel[]>(this.farmStation);
  }

  getFarmByFiwareService(fiwareService: string): Observable<SensorModel[]> {
    const httpHeaders = new HttpHeaders({
      'fiware-service': fiwareService,
      'fiware-servicepath': '',
    });
    return this.http.get<SensorModel[]>(this.farmStation, {
      headers: httpHeaders,
    });
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
