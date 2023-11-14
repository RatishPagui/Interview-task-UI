import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard4Component } from './course-card4.component';

describe('CourseCard4Component', () => {
  let component: CourseCard4Component;
  let fixture: ComponentFixture<CourseCard4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCard4Component]
    });
    fixture = TestBed.createComponent(CourseCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
