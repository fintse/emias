import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public t!: string;
  
  @Input()
  public d!: MatDrawer;


  toggleSidenav(): void {    
    this.d.toggle();
  }
}

