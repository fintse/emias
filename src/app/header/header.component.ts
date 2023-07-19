import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
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

  public constructor() {
    console.log('constructor');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  toggleSidenav(): void {    
    this.d.toggle();
  }
}

