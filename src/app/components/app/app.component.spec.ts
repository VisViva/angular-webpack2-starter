import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { routes } from '../../app.routing';
import { StoreDevToolsComponent } from '../store-devtools/store-devtools.component';

import 'rxjs/add/operator/takeUntil';

describe('App Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
        ],
      providers: [],
      declarations: [AppComponent, DashboardComponent, StoreDevToolsComponent]
    });
  });
});
