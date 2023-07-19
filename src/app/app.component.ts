import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'emias';
  public drawer !: MatDrawer;
  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
  }
  // public search(event: Event) : void {
  //   const value = (event.target as HTMLInputElement).value
  //   console.log(value);
  // } 
}
