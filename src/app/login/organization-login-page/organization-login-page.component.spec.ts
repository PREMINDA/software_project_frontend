import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLoginPageComponent } from './organization-login-page.component';

describe('OrganizationLoginPageComponent', () => {
  let component: OrganizationLoginPageComponent;
  let fixture: ComponentFixture<OrganizationLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
