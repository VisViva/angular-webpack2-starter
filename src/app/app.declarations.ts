import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoreDevToolsComponent } from './components/store-devtools/store-devtools.component';

const STORE_DEV_TOOLS_DECLARATIONS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_DECLARATIONS.push(...[
  StoreDevToolsComponent
]);

export const APP_DECLARATIONS = [
  DashboardComponent,
  STORE_DEV_TOOLS_DECLARATIONS
];
