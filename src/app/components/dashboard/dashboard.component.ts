import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent {
  constructor (){}
}
