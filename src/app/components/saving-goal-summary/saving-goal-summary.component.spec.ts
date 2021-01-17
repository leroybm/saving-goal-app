import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingGoalSummaryComponent } from './saving-goal-summary.component';

describe('SavingGoalSummaryComponent', () => {
  let component: SavingGoalSummaryComponent;
  let fixture: ComponentFixture<SavingGoalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingGoalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingGoalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
