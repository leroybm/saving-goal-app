import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { addMonths } from '../../util/date'

@Component({
  selector: 'app-month-input',
  template: `
    <div class="app-month-input">
      <label for="">Reach goal by</label>
      <div class="app-month-input__input">
        <button (click)="addMonthsToDate(false)">
          <img src="assets/img/arrow.svg" alt="">
        </button>
        <div class="app-month-input__date-display">
          <span>{{ date | date:'LLLL' }}</span>
          <span>{{ date | date:'y' }}</span>
        </div>
        <button (click)="addMonthsToDate(true)">
          <img src="assets/img/arrow.svg" alt="">
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./month-input.component.scss']
})
export class MonthInputComponent implements OnInit {
  public date = addMonths(new Date(), 1);

  @Output() selectedDateEvent = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
    this.selectedDateEvent.emit(this.date); // Emits initial value
  }

  /**
   * Adds or subtracts a month from the date, prevents setting date before now
   * 
   * @param increase flag that indicates if this method will increase or decrease the month value
   */
  public addMonthsToDate(increase) {
    const newDate = addMonths(this.date, increase ? 1 : -1);

    if (newDate.getTime() < new Date().getTime()) return;

    this.date = newDate;
    this.selectedDateEvent.emit(this.date);
  }
}
