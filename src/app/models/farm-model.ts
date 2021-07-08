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
  value: any;
  metadata: MetadataValue;
}

export interface CoordValue {
  lon: any;
  lat: any;
}
export interface MetadataValue {
  TimeInstant: Value;
  name: Value;
  ranges: RangeModel;
}

export interface RangeModel {
  type: string;
  value: RangeValueModel;
}

export interface RangeValueModel {
  max: any;
  min: any;
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
  offsetTimeArr!: Array<any>;
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


export class SensorModelNewRes{
  results! : SensorModelNew []
}

export class SensorModelNew{
  id!: number;
  sensor_id!: string;
  sensor_name!: string;
  sensor_name_thai!: string;
  datatype!: string;
  min!: number;
  max!: number;
  unit!: string;
  time!: string;
  isChecked: number = 0;
}

export class EntityTemplateModelNewRes{
  results! : EntityTemplateModelNew []
}

export class EntityTemplateModelNew{
  id!: number;
  temp_name!: string;
  sensor_name!: string;
  sensor_name_thai!: string;
  temp_id!: string;
  sensor_id!: string;
  datatype!: string;
  time!: string;
}

export class EntityModelNewRes{
  results! : EntityModelNew []
}

export class EntityModelNew{
  id!: number;
  entity_id!: string;
  entity_name!: string;
  temp_name!: string;
  temp_id!: string;
  time!: string;
}

export class FarmModelNewRes{
  results! : FarmModelNew []
}

export class FarmModelNew{
  id!: number;
  farm_id!: string;
  farm_name!: string;
  owner!: string;
  lati!: number;
  long!: number;
  note!: string;
  time!: string;
  apiKey!: string;

}
/*************************** */

// export class UpdateMetadata {
//   head!: string;
//   type!: value_type;
//   metadata!: value_metadata;

// }

// export class value_type {
//   value!: any;
// }
// export class value_metadata {
//   name!: value_name;
//   range!: value_range;
//   unit!: value_unit;
// }

// export class value_name {
//   value!: any;
// }
// export class value_range {
//   value!: any;
// }
// export class value_unit {
//   value!: any;
// }
/************************** */
/************************** */
export class subscriptions {
  description!: any;
  subject!: entities_subject;
  notification!: detail_notification;

}

export class entities_subject {
  entities!: entities_subjectDetail[];
}
export class entities_subjectDetail {
  idPattern: string = "";
  type!: any;
}
export class detail_notification {
  http!: value_url;
  attrs!: attrsDetail[];

}
export class value_url {
  url!: string;
}
export class attrsDetail {
  sensor_name!: any;

}

//************************* */

//************************* */
export class FarmService {
  services!: FarmServiceDetail[];
}
export class FarmServiceDetail {
  apikey!: string;
  cbroker!: string;
  entity_type!: string;
  resource!: string;
}

export class EntityInFarmService {
  type!: string;
  id!: string;
  name!: valueName;
  fiware_service!: valueFiware_service;
  fiware_servicepath!: valueFiware_servicepath;
  geo!: valueGeo;
  info!: valueInfo;
}
export class valueName {
  value!: any;
}
export class valueFiware_service {
  value!: any;
}
export class valueFiware_servicepath {
  value!: any;
}
export class valueGeo {
  value!: any;
}
export class valueInfo {
  value!: name_valueInfo;
}
export class name_valueInfo {
  name!: value_name_valueInfo;
}
export class value_name_valueInfo {
  value!: any;
}

//******************* */
export class DeviceService{
  devices!: DeviceServiceDetail[];

}

export class DeviceServiceDetail{
  device_id!: string;
  entity_name!: string;
  entity_type!: string;
  timezone!: string;
  attributes!: attributeDetail[];
}

export class attributeDetail{
  object_id!: string;
  name!: string;
  type!: string;
}

//***************************************** */
export class FarmEntityModelNewRes{
  results! : FarmEntityModelNew []
}

export class FarmEntityModelNew{
  id!: number;
  farm_id!: string;
  entity_id!: string;
  note!: string;
  install!: any;
  farm_name!: string;
  entity_name!: string;
  time!: string;
}
