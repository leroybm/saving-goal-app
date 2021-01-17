import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
      <img src="assets/img/logo.svg" alt="Origin Financial Logo">
    </header>

    <div class="container">
      <div class="call-to-action">
        <h2>Let's plan your <strong>saving goal</strong></h2>
      </div>

      <div class="new-saving-goal">
        <div class="new-saving-goal__header">
          <img src="assets/img/house-icon.svg" alt="House Icon">
          <div>
            <h3>Buy a house</h3>
            <p>Saving goal</p>
          </div>
        </div>
        <div class="new-saving-goal__form">
          <app-currency-input></app-currency-input>
          <app-month-input></app-month-input>
        </div>
        <div class="new-saving-goal__summary">
          <div class="new-saving-goal__summary--per-month">
            <p>Monthly amount</p>
            <p><strong>$521</strong></p>
          </div>
          <div class="new-saving-goal__summary--text-summary">
            <p>You’re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b> goal by <b>October 2020.</b></p>
          </div>
        </div>
        <div class="new-saving-goal__actions">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'take-home-assignment';
}
