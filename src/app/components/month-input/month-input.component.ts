import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-input',
  template: `
    <div class="app-month-input">
      <label for="">Reach goal by</label>
      <div class="app-month-input__input">
        <button>
          <img src="assets/img/arrow.svg" alt="">
        </button>
        <div class="app-month-input__date-display">
          <span>October</span>
          <span>2021</span>
        </div>
        <button>
          <img src="assets/img/arrow.svg" alt="">
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./month-input.component.scss']
})
export class MonthInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
