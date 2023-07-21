import { AfterViewInit, Component, ContentChild, EventEmitter, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  @Output() 
  public setSidenavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true)

  @ViewChild('drawer')
  public drawer!: MatDrawer;

  @ContentChild('mainContent')
  public myContent!: TemplateRef<any>;

  @ViewChild('viewContent', {read: ViewContainerRef, static: false})
  public myView!: ViewContainerRef;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  public ngOnInit() {
    this.setSidenavControl.emit(this.drawer);
  }

  public ngAfterViewInit(): void {
    Promise.resolve().then(() => {
      this.myView.createEmbeddedView(this.myContent);
    });
  }
}
