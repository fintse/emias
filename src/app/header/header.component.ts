import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public search(event: Event) : void {
    const value = (event.target as HTMLInputElement).value
    console.log(value);
  } 
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public searchLabel: string = 'поиск пациента происходит с помощью сервиса ЕРП (ищи 111)';

  @Input()
  public t!: string;
  
  @Input()
  public d!: MatDrawer;


  toggleSidenav(): void {    
    this.d.toggle();
  }
}

