import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSavingGoalComponent } from './new-saving-goal.component';

describe('NewSavingGoalComponent', () => {
  let component: NewSavingGoalComponent;
  let fixture: ComponentFixture<NewSavingGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSavingGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSavingGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
   * As this component handles all the logic from multiple functional components,
   * the testing is done on e2e
   */
});
