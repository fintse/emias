import { Component, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { IPatient, patients$ } from './mock'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements AfterViewChecked {
  public title = 'EMIAS (как я понял принцип работы)';
  public searchInputValue = 'Ищем пациента, используя сервис ЕРП (name или id)';
  public searchText = '';

  public patients$: Observable<IPatient[]> = patients$;

  public ngAfterViewChecked(): void {
    this.patients$ = patients$;
  }

  search({target} : Event) {
    this.searchText = (target as HTMLInputElement).value;
  }
  
}