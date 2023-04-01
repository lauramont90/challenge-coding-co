import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWorkshopsComponent } from './courses-workshops.component';

describe('CoursesWorkshopsComponent', () => {
  let component: CoursesWorkshopsComponent;
  let fixture: ComponentFixture<CoursesWorkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesWorkshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWorkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
