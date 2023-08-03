import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { PatientCardListComponent } from './patient-card-list/patient-card-list.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { PatientsFilterPipe } from './patients-filter.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PatientsComponent } from './content/patients/patients.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientCardListComponent,
    PatientsFilterPipe,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } }
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }