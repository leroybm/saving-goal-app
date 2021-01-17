import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { maskCurrency, parseNumber } from 'src/app/util/currency';

@Component({
  selector: 'app-currency-input',
  template: `
    <div class="app-currency-input">
      <label for="">Total amount</label>
      <div class="app-currency-input__input">
        <img src="assets/img/dolar-sign.svg" alt="">
        <input
          type="text"
          [value]="value"
          (keyup)="applyMask($event)"
          (keydown)="handleKeyDown($event)"
        />
      </div>
    </div>
  `,
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit {
  public value: string = '';

  @Output() currencyValueEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Applies a mask over the input value
   * 
   * @param event 
   */
  applyMask(event) {
    event.preventDefault();
    event.stopPropagation();

    const { value } = event.target;

    this.value = maskCurrency(value);
    this.currencyValueEmitter.emit(parseNumber(this.value))
  }

  /**
   * Prevents text from being inserted on input
   * 
   * @param event 
   */
  handleKeyDown(event) {
    event.stopPropagation();

    if (event.key.length === 1 && /[a-zA-Z]/.test(event.key)) {
      event.preventDefault();
    }
  }
}
