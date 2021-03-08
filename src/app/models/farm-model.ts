// export class FarmModel {
//   id!: string;
// }

export interface FarmModel {
  id: string;
  type: string;
  fiware_service: FiwareServiceModel;
  geo: FarmGeo;
  name: FarmName;
}

export interface FiwareServiceModel {
  type: string;
  value: string;
  metadata: any;
}

export interface FarmGeo {
  type: string;
  value: CoordValue;
  metadata: any;
}

export interface FarmName {
  type: string;
  value: string;
  metadata: MetadataValue;
}

export interface CoordValue {
  lon: any;
  lat: any;
}
export interface MetadataValue {
  TimeInstant: Value;
  name: Value;
}
export interface Value {
  type: string;
  value: string;
}

export interface SensorModel {
  id: string;
  type: string;
  name: string;
  Carbondioxide: FarmName;
  Humidity: FarmName;
  MAC: FarmName;
  Oxygen: FarmName;
  Temperature: FarmName;
  TimeInstant: FarmName;
  WindOut: FarmName;
  WindSpeed: FarmName;
  WindTemp: FarmName;
  refStore: FarmName;
  mounting_point_name: FarmName;
  mounting_point: FarmName;
}

export class SensorRePackModel {
  data!: FarmName;
  name!: string;
  unit!: string;
}
