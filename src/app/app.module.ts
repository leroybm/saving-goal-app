import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { MonthInputComponent } from './components/month-input/month-input.component';
import { SavingGoalSummaryComponent } from './components/saving-goal-summary/saving-goal-summary.component';
import { NewSavingGoalComponent } from './components/new-saving-goal/new-saving-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputComponent,
    MonthInputComponent,
    SavingGoalSummaryComponent,
    NewSavingGoalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
