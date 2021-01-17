import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-input',
  template: `
    <div class="app-currency-input">
      <label for="">Total amount</label>
      <div class="app-currency-input__input">
        <img src="assets/img/dolar-sign.svg" alt="">
        <input type="text" value="25,000"/>
      </div>
    </div>
  `,
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
