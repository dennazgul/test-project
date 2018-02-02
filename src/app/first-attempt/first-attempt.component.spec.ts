import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAttemptComponent } from './first-attempt.component';

describe('FirstAttemptComponent', () => {
  let component: FirstAttemptComponent;
  let fixture: ComponentFixture<FirstAttemptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
