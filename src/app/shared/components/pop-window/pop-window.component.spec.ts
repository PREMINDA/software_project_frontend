import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopWindowComponent } from './pop-window.component';

describe('PopWindowComponent', () => {
  let component: PopWindowComponent;
  let fixture: ComponentFixture<PopWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
