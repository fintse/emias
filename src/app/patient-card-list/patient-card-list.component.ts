import { Component, Input, OnInit } from '@angular/core';
import { IPatient } from '../mock';

@Component({
  selector: 'app-patient-card-list',
  templateUrl: './patient-card-list.component.html',
  styleUrls: ['./patient-card-list.component.css']
})
export class PatientCardListComponent implements OnInit {
  // public changeName(event: Event): void {
  //   const target = event.target as HTMLInputElement
  //   this.patient.name = target.value;
  // }
  public age = 18;

  @Input()
  public patient!: IPatient;


  ngOnInit(): void {
      console.log(this.patient);
  }
}
