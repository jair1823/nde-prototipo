import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveCrudComponent } from './executive-crud.component';

describe('ExecutiveCrudComponent', () => {
  let component: ExecutiveCrudComponent;
  let fixture: ComponentFixture<ExecutiveCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
