import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryCrudComponent } from './galery-crud.component';

describe('GaleryCrudComponent', () => {
  let component: GaleryCrudComponent;
  let fixture: ComponentFixture<GaleryCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleryCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleryCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
