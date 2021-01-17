import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardNavigationService } from 'src/app/services/keyboard-navigation.service';

interface NewSavingGoalComponentOutput {
  endDate: Date;
  totalValue: number;
}

@Component({
  selector: 'app-new-saving-goal',
  template: `
    <div class="app-new-saving-goal">
      <div class="app-new-saving-goal__header">
        <img src="assets/img/house-icon.svg" alt="House Icon">
        <div>
          <h3>{{ goalTitle }}</h3>
          <p>Saving goal</p>
        </div>
      </div>
      <div class="app-new-saving-goal__form">
        <app-currency-input
          (currencyValueEmitter)="totalValue = $event"
        ></app-currency-input>
        <app-month-input
          (selectedDateEvent)="endDate = $event"
        ></app-month-input>
      </div>
      <app-saving-goal-summary
        [date]="endDate"
        [value]="totalValue"
      ></app-saving-goal-summary>
      <div class="app-new-saving-goal__actions">
        <button (click)="emitSubmitEvent()">Confirm</button>
      </div>
    </div>
  `,
  styleUrls: ['./new-saving-goal.component.scss']
})
export class NewSavingGoalComponent implements OnInit, OnDestroy {
  
  public endDate: Date;
  public totalValue: number = 0;

  private subscription: Subscription;

  @Input() goalTitle: string = 'Buy a horse';

  @Output() submit = new EventEmitter<NewSavingGoalComponentOutput>();

  constructor(
    private keyboardNavigationService: KeyboardNavigationService
  ) { }

  ngOnInit(): void {
    this.keyboardNavigationService.onNavigationSend().subscribe(() => this.emitSubmitEvent()); 
  }

  ngOnDestroy(): void {
    return this.subscription && this.subscription.unsubscribe();
  }

  public emitSubmitEvent() {
    this.submit.emit({
      endDate: this.endDate,
      totalValue: this.totalValue
    });
  }
}
