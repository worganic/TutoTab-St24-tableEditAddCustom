import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorgEditComponent } from './worg-edit.component';

describe('WorgEditComponent', () => {
  let component: WorgEditComponent;
  let fixture: ComponentFixture<WorgEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorgEditComponent]
    });
    fixture = TestBed.createComponent(WorgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
