import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard1Component } from './course-card1.component';

describe('CourseCard1Component', () => {
  let component: CourseCard1Component;
  let fixture: ComponentFixture<CourseCard1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCard1Component]
    });
    fixture = TestBed.createComponent(CourseCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
