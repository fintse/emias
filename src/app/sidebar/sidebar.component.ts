import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() 
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true)

  @ViewChild('drawer', {static: true})
  public drawer!: MatDrawer;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  public ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }
}
