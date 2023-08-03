import { Route } from '@angular/router';
import { PatientsComponent } from './content/patients/patients.component';

export const routes: Route[] = [
    {
    path: 'patients',
    component: PatientsComponent,
    }
];