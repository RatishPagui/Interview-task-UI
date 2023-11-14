import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCard3Component } from './course-card3.component';

describe('CourseCard3Component', () => {
  let component: CourseCard3Component;
  let fixture: ComponentFixture<CourseCard3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCard3Component]
    });
    fixture = TestBed.createComponent(CourseCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
