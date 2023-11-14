import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCompComponent } from './company-comp.component';

describe('CompanyCompComponent', () => {
  let component: CompanyCompComponent;
  let fixture: ComponentFixture<CompanyCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCompComponent]
    });
    fixture = TestBed.createComponent(CompanyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
