import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthInputComponent } from './month-input.component';

describe('MonthInputComponent', () => {
  let component: MonthInputComponent;
  let fixture: ComponentFixture<MonthInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start with a month from now', () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 1)
    expect(component.date.getMonth()).toBe(expectedDate.getMonth());
  });

  it('should add 3 months', () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 4);
    new Array(3).fill(null).forEach(() => component.addMonthsToDate(true));
    expect(component.date.getMonth()).toBe(expectedDate.getMonth());
  });

  it('should not be a past or current month', () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth());
    new Array(6).fill(null).forEach(() => component.addMonthsToDate(true)); // Adds 6 months
    new Array(12).fill(null).forEach(() => component.addMonthsToDate(false)); // Subtracts 6 months
    expect(component.date.getMonth()).toBe(expectedDate.getMonth() + 1);
  });

  it('should contain month string', async () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 4); 
    new Array(3).fill(null).forEach(() => component.addMonthsToDate(true));
    const monthString = expectedDate.toLocaleString('default', { month: 'long' })
    await fixture.detectChanges();
    expect(new RegExp(monthString).test(fixture.nativeElement.textContent)).toBeTrue();
  });

  it('should contain year string', async () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 13); 
    new Array(12).fill(null).forEach(() => component.addMonthsToDate(true));
    const yearString = expectedDate.getFullYear().toString();
    await fixture.detectChanges();
    expect(new RegExp(yearString).test(fixture.nativeElement.textContent)).toBeTrue();
  });

  it('should emmit changes when changing date', async () => {
    const expectedDate = new Date();
    expectedDate.setMonth(expectedDate.getMonth() + 2); 
    let returnedDate: Date;
    component.selectedDateEvent.subscribe(next => returnedDate = next);
    component.addMonthsToDate(true);
    expect(returnedDate.getMonth()).toEqual(expectedDate.getMonth());
  });
});
