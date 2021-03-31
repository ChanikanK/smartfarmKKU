import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';
import {
  FarmModel,
  SensorModel,
  contextResponsesModel,
} from '../models/farm-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  farmStation: string = environment.farmAPILink;
  shortTerm: string = environment.sthAPILink;

  constructor(private http: HttpClient) {}

  setFarmStation(val: string) {
    this.farmStation = val;
  }

  getFarmStation(val: string) {
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


  getWTByID(id: string): Observable<SensorModel[]> {

    return this.http.get<SensorModel[]>(this.farmStation+"?id="+id,);
  }

  // getFarmName(farmID: string) {
  //   // this.getFarms().subscribe;
  //   return this.http.get<FarmModel[]>(this.farmStation);
  // }

  getShortTerm(
    fiwareService: string,
    id: string,
    type: string,
    attr: string,
    aggrMethiod: string,
    aggrPeriod: string,
    dateFrom: string,
    dateTo: string
  ): Observable<contextResponsesModel[]> {
    const httpHeaders = new HttpHeaders({
      'fiware-service': fiwareService,
      'fiware-servicepath': '/',
    });
    return this.http.get<contextResponsesModel[]>(
      this.shortTerm +
        '/type/' +
        type +
        '/id/' +
        id +
        '/attributes/' +
        attr +
        '?aggrMethod=' +
        aggrMethiod +
        '&aggrPeriod=' +
        aggrPeriod +
        '&dateFrom=' +
        dateFrom +
        '&dateTo=' +
        dateTo,
      {
        headers: httpHeaders,
      }
    );
  }
}
