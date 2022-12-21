import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDashoboardComponent } from './organization-dashoboard.component';

describe('OrganizationDashoboardComponent', () => {
  let component: OrganizationDashoboardComponent;
  let fixture: ComponentFixture<OrganizationDashoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationDashoboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationDashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
