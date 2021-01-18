# Saving goal app

## About

This is a simple Angular project that presents a form for creating a new saving goal.

The form has a currency input that automaticaly formats the given value to the USD currency format, as well as a date input that increases by one month.

The inputed info is presented in a summary component that shows how much should be saved to reach the goal by the end date.

## How it was done

I've used Angular 9 as base, as well as the default dependencies (Protactor, Karma, RxJs), I've refrained from using other dependencies as to do everything with pure JS, so this app uses the native javascript Date (That is kind of hard to use compared with alternatives) and the currency mask is done by hand.

The components that act as inputs are more pure, using just helpers and some services that provide abstractions.

Some components are tested by unit tests, but the main functionality of the app is tested e2e with Protactor.

## Generated below are the Angular CLI default Readme

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
