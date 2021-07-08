import { DeviceService, EntityInFarmService, FarmName, subscriptions } from './../models/farm-model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import * as L from 'leaflet';
import { Observable } from 'rxjs';
import {
  FarmModel,
  SensorModel,
  contextResponsesModel,
  SensorModelNew,
  SensorModelNewRes,
  EntityTemplateModelNew,
  EntityTemplateModelNewRes,
  EntityModelNewRes,
  FarmModelNewRes,
  FarmEntityModelNewRes,
  EntityModelNew,
  FarmModelNew,
  FarmEntityModelNew,
  FarmService,
} from '../models/farm-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  farmStation: string = environment.farmAPILink;
  shortTerm: string = environment.sthAPILink;
  nodejsapi: string = environment.nodejsapi;

  serviceHttp: string = environment.serviceHttp
  deviceHttp: string = environment.deviceHttp
  entityFarmHttp: string = environment.entityFarmHttp
  metadata: string = environment.metadataHttp
  subscriptionsHttp: string = environment.subscriptionsHttp

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

  getSensorNew(): Observable<SensorModelNewRes> {
    return this.http.get<SensorModelNewRes>(this.nodejsapi+"/sensor");
  }

  getSensorEnById(temp_id : string): Observable<SensorModelNewRes> {
    return this.http.get<SensorModelNewRes>(this.nodejsapi+"/device_sensor_temp_id/"+temp_id);
  }
//***** */
  // getSensorShowEnById(entity_template : EntityTemplateModelNew): Observable<EntityTemplateModelNew> {
  //   return this.http.get<EntityTemplateModelNew>(this.nodejsapi+"/sensors-in-temp/"+entity_template.temp_id);
  // }
//******* */

  getFarmEnById(farm : FarmModelNew): Observable<FarmEntityModelNewRes> {
    return this.http.get<FarmEntityModelNewRes>(this.nodejsapi+"/entity-farm_farm_id/"+farm.farm_id);
  }

  getEnById(entity_id : string): Observable<any> {
    return this.http.get<any>(this.nodejsapi+"/entity-get/"+entity_id);
  }

  getEntityTemplateNew(): Observable<EntityTemplateModelNewRes> {
    return this.http.get<EntityTemplateModelNewRes>(this.nodejsapi+"/device_temp");
  }

  getEntityNew(): Observable<EntityModelNewRes> {
    return this.http.get<EntityModelNewRes>(this.nodejsapi+"/entity");
  }

  getFarmNew(): Observable<FarmModelNewRes> {
    return this.http.get<FarmModelNewRes>(this.nodejsapi+"/farm");
  }

  getFarmEntityNew(): Observable<FarmEntityModelNewRes> {
    return this.http.get<FarmEntityModelNewRes>(this.nodejsapi+"/farm_entity");
  }
//ADDDDDDDDD
  addSensor(sensor : SensorModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.nodejsapi+"/sensor-add", JSON.stringify(sensor), {
      headers: httpHeaders,
    });
  }

  addEntityTemplate(entity_template : EntityTemplateModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.nodejsapi+"/device_temp-add", JSON.stringify(entity_template), {
      headers: httpHeaders,
    });
  }
  /****************update metadata************* oo*/
  updateMetadata(jsonSensors:string,entity_name:string,farm_name: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service': ''+farm_name,
      'fiware-servicepath':'/'
    });
    return this.http.post<any>(this.metadata+"/"+entity_name+"/attrs", jsonSensors, {
      headers: httpHeaders
    });
  }

  //******************************************** */
  /****************subscription************* oo*/
  subscriptions(farm_entity : subscriptions, farm_name: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service': ''+farm_name,
      'fiware-servicepath':'/'
    });
    const body = JSON.stringify(farm_entity)
    return this.http.post<any>(this.subscriptionsHttp, body, {
      headers: httpHeaders
    });
  }
  //******************************************** */

  /****************** ent and device oo*/
  addEntity(entity : EntityModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.nodejsapi+"/entity-add", JSON.stringify(entity), {
      headers: httpHeaders,
    });
  }

  addDevices(entity : DeviceService,farm_name: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service': ''+ farm_name,
      'fiware-servicepath':'/'
    });
    const body = JSON.stringify(entity)
    return this.http.post<any>(this.deviceHttp, body, {
      headers: httpHeaders
    });
  }
/*************************** */
///***************farm and service*************oo */
  addFarm(farm : FarmModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.nodejsapi + '/farm-add', JSON.stringify(farm), {
      headers: httpHeaders
    });
  }

  addFarms(farm : FarmService,farm_name: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service':''+farm_name,
      'fiware-servicepath':'/'
    });
    const body = JSON.stringify(farm)
    return this.http.post<any>(this.serviceHttp, body, {
      headers: httpHeaders
    });
  }

  addEntityInFarmService(farm : EntityInFarmService,farm_name: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify(farm)
    return this.http.post<any>(this.entityFarmHttp, body, {
      headers: httpHeaders
    });
  }
/************************************* */
  addFarmEntity(farm_entity : FarmEntityModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.nodejsapi+"/farm_entity-add", JSON.stringify(farm_entity), {
      headers: httpHeaders,
    });
  }

  //DELETEEEEEEEEEEEe
  deleteSensor(sensor : SensorModelNew): Observable<any> { const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
    return this.http.delete<any>(this.nodejsapi+"/sensor-delete/"+sensor.id);
  }

  deleteEntityTemplate(entity_template : EntityTemplateModelNew): Observable<any> { const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.http.delete<any>(this.nodejsapi+"/device_temp-delete/"+entity_template.id);
  }

  deleteEntity(entity : EntityModelNew): Observable<any> { const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  return this.http.delete<any>(this.nodejsapi+"/entity-delete/"+entity.id);
  }

  deleteFarm(farm : FarmModelNew): Observable<any> { const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
    return this.http.delete<any>(this.nodejsapi+"/farm-delete/"+farm.id);
  }

  deleteFarmEntity(farm_entity : FarmEntityModelNew): Observable<any> { const httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
    return this.http.delete<any>(this.nodejsapi+"/farm_entity-delete/"+farm_entity.id);
  }



//ediettttt
  editSensor(sensor : SensorModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/sensor-update", JSON.stringify(sensor), {
      headers: httpHeaders,
    });
  }

  editEntityTemplate(entity_template : EntityTemplateModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/device_temp-update", JSON.stringify(entity_template), {
      headers: httpHeaders,
    });
  }

  editEntity(entity : EntityModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/entity-update", JSON.stringify(entity), {
      headers: httpHeaders,
    });
  }

  editFarm(farm : FarmModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/farm-update", JSON.stringify(farm), {
      headers: httpHeaders,
    });
  }

  editFarmEntity(farm_entity : FarmEntityModelNew): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/farm_entity-update", JSON.stringify(farm_entity), {
      headers: httpHeaders,
    });
  }


  editSensorInTemp(sensors:SensorModelNew[],temp_id:string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<any>(this.nodejsapi+"/sensor-in-temp/"+temp_id, JSON.stringify(sensors), {
      headers: httpHeaders,
    });
  }


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
