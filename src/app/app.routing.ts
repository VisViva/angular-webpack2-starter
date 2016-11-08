import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'sync', loadChildren: './features/sync/index#SyncModule?sync=true' },
  { path: '**', redirectTo: '' }
];
