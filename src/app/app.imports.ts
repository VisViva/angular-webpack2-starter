import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { routes } from './app.routing';
import { rootReducer } from './reducers';
import { UserEffects } from './user/user.effects';

const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  }),
  StoreLogMonitorModule
]);

export const APP_IMPORTS = [
  EffectsModule.run(UserEffects),
  ReactiveFormsModule,
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
  STORE_DEV_TOOLS_IMPORTS
];
