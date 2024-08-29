/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HrViewPayslipsComponent } from './hr-view-payslips.component';

describe('HrViewPayslipsComponent', () => {
  let component: HrViewPayslipsComponent;
  let fixture: ComponentFixture<HrViewPayslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrViewPayslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrViewPayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
