import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompComponent } from './page-comp.component';

describe('PageCompComponent', () => {
  let component: PageCompComponent;
  let fixture: ComponentFixture<PageCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCompComponent]
    });
    fixture = TestBed.createComponent(PageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
