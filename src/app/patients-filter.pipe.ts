import { Pipe, PipeTransform } from '@angular/core';
import { IPatient } from './mock';

@Pipe({
  name: 'patientsFilter'
})
export class PatientsFilterPipe implements PipeTransform {

  public  transform(patients: IPatient[], searchText: string): IPatient[] {
    if (!searchText) {
      return patients;
    }
    return patients.filter((patients:IPatient) => {
      return `${patients.index} ${patients.name}`.toLowerCase().includes(searchText);
    });
  }
}
  