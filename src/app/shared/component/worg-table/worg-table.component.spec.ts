import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgTableComponent } from './worg-table.component';

describe('WorgTableComponent', () => {
  let component: WorgTableComponent;
  let fixture: ComponentFixture<WorgTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgTableComponent]
    });
    fixture = TestBed.createComponent(WorgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
