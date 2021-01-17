import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { MonthInputComponent } from './components/month-input/month-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputComponent,
    MonthInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
