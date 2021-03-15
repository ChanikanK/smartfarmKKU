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

export class contextResponsesModel {
  contextElement!: contextElement;
  statusCode!: any;
}

export class contextElement {
  attributes!: attributesModel;
  id!: string;
  isPattern!: boolean;
  type!: string;
}

export class attributesModel {
  name!: string;
  values!: valueModel[];
}

export class attributesReModel {
  name!: string;
  values!: valueModel[];
  // valuesArr!: Array<any>;
  valueJson!: chartJS[];
}

export class valueModel {
  _id!: valueIDModel;
  points!: pointModel[];
}

export class valueIDModel {
  attrName!: string;
  origin!: string;
  resolution!: string;
}

export class pointModel {
  offset!: number;
  samples!: number;
  max!: number;
}

export class chartJS {
  data!: Array<any>;
  label!: string;
}
