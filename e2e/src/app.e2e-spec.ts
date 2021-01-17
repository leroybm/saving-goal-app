import { AppPage } from './app.po';
import { browser, by, logging, element, Key } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Everything should work', () => {
    page.navigateTo();

    element(by.css('.app-currency-input__input input')).sendKeys('100abc0000');

    expect(
      element(by.css('.app-saving-goal-summary__per-month p:last-of-type')).getText()
    ).toEqual('$10,000.00');

    element(by.css('.app-month-input__input button:last-of-type')).click();

    expect(
      element(by.css('.app-saving-goal-summary__per-month p:last-of-type')).getText()
    ).toEqual('$5,000.00');

    element(by.css('body')).sendKeys(Key.ARROW_RIGHT);

    expect(
      element(by.css('.app-saving-goal-summary__per-month p:last-of-type')).getText()
    ).toEqual('$3,333.33');

    expect(
      element(by.css('.app-saving-goal-summary__text-summary')).getText()
    ).toContain('You’re planning 3 monthly deposits to reach your $3,333.33 goal by ');

    new Array(10).fill(null).forEach(() => element(by.css('body')).sendKeys(Key.ARROW_LEFT))

    expect(
      element(by.css('.app-saving-goal-summary__per-month p:last-of-type')).getText()
    ).toEqual('$10,000.00');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
