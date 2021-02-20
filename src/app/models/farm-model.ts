// export class FarmModel {
//   id!: string;
// }


export interface FarmModel  {
  id: string;
  type: string;
  fiware_service: FiwareServiceModel;
  geo: FarmGeo;
  name: FarmName;
}


export interface FiwareServiceModel  {
  type: string;
  value: string;
  metadata:any;
}

export interface FarmGeo  {
  type: string;
  value: CoordValue;
  metadata:any;
}

export interface FarmName  {
  type: string;
  value: string;
  metadata:any;
}

export interface CoordValue  {
  lon: any;
  lat: any;
}
