import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCardComponent } from './vaccination-card.component';

describe('VaccinationCardComponent', () => {
  let component: VaccinationCardComponent;
  let fixture: ComponentFixture<VaccinationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
