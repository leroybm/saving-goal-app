import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { addMonths } from 'src/app/util/date';

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

  it('should render correctly', async () => {
    component.date = addMonths(new Date(), 3);
    component.value = 10000.00;
    await fixture.detectChanges();
    await fixture.whenRenderingDone();
    expect(fixture.nativeElement.textContent)
      .toContain('Monthly amount$3,333.33 You’re planning 3 monthly deposits to reach your $3,333.33 goal by ');
  });
});
