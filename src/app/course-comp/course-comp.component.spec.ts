import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCompComponent } from './course-comp.component';

describe('CourseCompComponent', () => {
  let component: CourseCompComponent;
  let fixture: ComponentFixture<CourseCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCompComponent]
    });
    fixture = TestBed.createComponent(CourseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
