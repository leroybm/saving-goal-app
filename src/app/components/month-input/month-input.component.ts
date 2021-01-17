import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardNavigationService } from 'src/app/services/keyboard-navigation.service';
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
export class MonthInputComponent implements OnInit, OnDestroy {
  private subscriptions = new Array<Subscription>();

  public date = addMonths(new Date(), 1);

  @Output() selectedDateEvent = new EventEmitter<Date>();

  constructor(
    private keyboardNavigationService: KeyboardNavigationService
  ) { }

  ngOnInit(): void {
    this.selectedDateEvent.emit(this.date); // Emits initial value
    this.listenToNavigation();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  /**
   * Adds or subtracts a month from the date, prevents setting date before now
   * 
   * @param shouldIncrease flag that indicates if this method will increase or decrease the month value
   */
  public addMonthsToDate(shouldIncrease: boolean) {
    const newDate = addMonths(this.date, shouldIncrease ? 1 : -1);

    if (newDate.getTime() < new Date().getTime()) return;

    this.date = newDate;
    this.selectedDateEvent.emit(this.date);
  }

  /**
   * Listen to keyboard navigation, and changes the month selected when pressing left or right
   */
  private listenToNavigation(): void {
    this.subscriptions.push(
      this.keyboardNavigationService.onNavigateLeft().subscribe(() => this.addMonthsToDate(false))
    );

    this.subscriptions.push(
      this.keyboardNavigationService.onNavigateRight().subscribe(() => this.addMonthsToDate(true))
    );
  }
}
