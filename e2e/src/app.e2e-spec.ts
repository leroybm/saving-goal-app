import { AppPage } from './app.po';
import { browser, by, logging, element, Key } from 'protractor';
import { doNTimes, getTextFromSelector } from './helpers';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Everything should work', () => {
    page.navigateTo();

    // Inputs value two currency input
    element(by.css('.app-currency-input__input input')).sendKeys('100abc0000');

    expect(getTextFromSelector('.app-saving-goal-summary__per-month p:last-of-type')).toEqual('$10,000.00');

    // Increases month value by one, clicking on the button
    element(by.css('.app-month-input__input button:last-of-type')).click();

    expect(getTextFromSelector('.app-saving-goal-summary__per-month p:last-of-type')).toEqual('$5,000.00');

    // Increases month value by one, pressing the right arrow key
    element(by.css('body')).sendKeys(Key.ARROW_RIGHT);

    expect(getTextFromSelector('.app-saving-goal-summary__per-month p:last-of-type')).toEqual('$3,333.33');

    // Makes sure that the summary is working as well as the per month value
    expect(
      element(by.css('.app-saving-goal-summary__text-summary')).getText()
    ).toContain('You’re planning 3 monthly deposits to reach your $3,333.33 goal by ');

    // Decrease month by one, ten times
    doNTimes(10, () => element(by.css('body')).sendKeys(Key.ARROW_LEFT));

    expect(getTextFromSelector('.app-saving-goal-summary__per-month p:last-of-type')).toEqual('$10,000.00');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
