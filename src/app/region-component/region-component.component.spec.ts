import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponentComponent } from './region-component.component';

describe('RegionComponentComponent', () => {
  let component: RegionComponentComponent;
  let fixture: ComponentFixture<RegionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionComponentComponent]
    });
    fixture = TestBed.createComponent(RegionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
