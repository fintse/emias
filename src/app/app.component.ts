import { Component, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IPatients, patients$ } from './mock'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements AfterViewChecked {
  public title = 'EMIAS (как я понял принцип работы)';
  public drawer !: MatDrawer;
  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }
  public patients$: Observable<IPatients[]> = patients$;

  public ngAfterViewChecked(): void {
    this.patients$ = patients$;
  }
}