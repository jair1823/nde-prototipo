import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorNavigationComponent } from './professor-navigation.component';

describe('ProfessorNavigationComponent', () => {
  let component: ProfessorNavigationComponent;
  let fixture: ComponentFixture<ProfessorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
