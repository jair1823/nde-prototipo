import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveStaffComponent } from './executive-staff.component';

describe('ExecutiveStaffComponent', () => {
  let component: ExecutiveStaffComponent;
  let fixture: ComponentFixture<ExecutiveStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
