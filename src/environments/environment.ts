// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  farmAPILink: 'https://apiweedsmf.kku.ac.th/orion/v2/entities',
  sthAPILink: 'https://apiweedsmf.kku.ac.th/sth/STH/v1/contextEntities',
  nodejsapi: 'http://localhost:3000',

  // apikeyService: '89c38970-b3d8-439d-98fa-784b999bcc8f',
  // cbroker: 'http://orion:1026',
  // entity_type: 'Farm',
  // resource: '/iot/json',
  serviceHttp: 'https://apiweedsmf.kku.ac.th/iotagent/iot/services',
  deviceHttp: 'https://apiweedsmf.kku.ac.th/iotagent/iot/devices',
  entityFarmHttp: 'https://apiweedsmf.kku.ac.th/orion/v2/entities',
  metadataHttp: 'https://apiweedsmf.kku.ac.th/orion/v2/entities',
  subscriptionsHttp: 'https://apiweedsmf.kku.ac.th/orion/v2/subscriptions',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
