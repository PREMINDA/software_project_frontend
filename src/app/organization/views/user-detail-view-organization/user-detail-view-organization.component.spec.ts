import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailViewOrganizationComponent } from './user-detail-view-organization.component';

describe('UserDetailViewOrganizationComponent', () => {
  let component: UserDetailViewOrganizationComponent;
  let fixture: ComponentFixture<UserDetailViewOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailViewOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailViewOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
