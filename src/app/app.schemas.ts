import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const DEV_SCHEMAS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) DEV_SCHEMAS.push(...[
  CUSTOM_ELEMENTS_SCHEMA
]);

export const APP_SCHEMAS = [
  DEV_SCHEMAS
];
