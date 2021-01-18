import { by, element } from 'protractor';

/**
 * Gets text via css selector
 *
 * @param selector css selector
 */
const getTextFromSelector = (selector: string) => element(by.css(selector)).getText();

/**
 * Runs the given function n times
 *
 * @param n number of times the function will run
 * @param fn any function
 * @param args the rest of arguments to be applied to the function
 */
const doNTimes = (n: number, fn: (...args) => void, ...args) => new Array(n).fill(null).forEach(() => fn(...args));

export {
    getTextFromSelector,
    doNTimes
};
