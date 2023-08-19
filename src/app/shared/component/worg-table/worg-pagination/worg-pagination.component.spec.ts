import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgPaginationComponent } from './worg-pagination.component';

describe('WorgPaginationComponent', () => {
  let component: WorgPaginationComponent;
  let fixture: ComponentFixture<WorgPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgPaginationComponent]
    });
    fixture = TestBed.createComponent(WorgPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
