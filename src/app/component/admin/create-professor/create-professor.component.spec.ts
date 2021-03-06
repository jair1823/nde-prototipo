import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfessorComponent } from './create-professor.component';

describe('CreateProfessorComponent', () => {
  let component: CreateProfessorComponent;
  let fixture: ComponentFixture<CreateProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
