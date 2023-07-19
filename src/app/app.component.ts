import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'EMIAS (как я понял принцип работы)';
  public drawer !: MatDrawer;
  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  
}
