import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectedComponent } from './injected.component';

describe('InjectedComponent', () => {
  let component: InjectedComponent;
  let fixture: ComponentFixture<InjectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjectedComponent]
    });
    fixture = TestBed.createComponent(InjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
