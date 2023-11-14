import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard2Component } from './course-card2.component';

describe('CourseCard2Component', () => {
  let component: CourseCard2Component;
  let fixture: ComponentFixture<CourseCard2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCard2Component]
    });
    fixture = TestBed.createComponent(CourseCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
