import { Component, Input, OnInit } from '@angular/core';
import { maskCurrency } from 'src/app/util/currency';
import { monthsBetween } from 'src/app/util/date';

@Component({
  selector: 'app-saving-goal-summary',
  template: `
   <div class="app-saving-goal-summary" [class.hidden]="!this.value">
      <div class="app-saving-goal-summary__per-month">
        <p>Monthly amount</p>
        <p><strong>{{ '$' + (maskCurrency(perMonth) || '0') }}
        </strong></p>
      </div>

      <div class="app-saving-goal-summary__text-summary">
        <p>You’re planning <b>{{ months }} monthly deposits</b> to reach your <b>{{ '$' + (maskCurrency(perMonth) || '0') }}</b> goal by <b>{{ date | date:'LLLL y' }}</b></p>
      </div>
    </div>
  `,
  styleUrls: ['./saving-goal-summary.component.scss']
})
export class SavingGoalSummaryComponent implements OnInit {

  get perMonth() {
    return this.value / this.months;
  }

  get months() {
    return monthsBetween(new Date(), this.date);
  }

  @Input() date: Date;
  @Input() value: number;

  public maskCurrency = maskCurrency;

  constructor() { }

  ngOnInit(): void {
  }

}
