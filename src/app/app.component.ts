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

      <app-new-saving-goal
        [goalTitle]="'Buy a house'" 
        (submit)="handleSubmit($event)"
      ></app-new-saving-goal>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public handleSubmit(event) {
    console.log(event);
  }
}
