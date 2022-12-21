import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListViewOrganizationComponent } from './user-list-view-organization.component';

describe('UserListViewOrganizationComponent', () => {
  let component: UserListViewOrganizationComponent;
  let fixture: ComponentFixture<UserListViewOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListViewOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListViewOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
