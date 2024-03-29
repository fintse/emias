import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCardListComponent } from './patient-card-list.component';

describe('PatientCardListComponent', () => {
  let component: PatientCardListComponent;
  let fixture: ComponentFixture<PatientCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardListComponent]
    });
    fixture = TestBed.createComponent(PatientCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
