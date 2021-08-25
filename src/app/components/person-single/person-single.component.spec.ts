import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSingleComponent } from './person-single.component';

describe('PersonSingleComponent', () => {
  let component: PersonSingleComponent;
  let fixture: ComponentFixture<PersonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
