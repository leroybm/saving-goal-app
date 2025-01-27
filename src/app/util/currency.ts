const PUNCTUATION_REGEX = /[\.,]+/g;

/**
 * Masks a string to USD number format
 *
 * @param value either a previously masked string or a clean string or number
 */
function maskCurrency(value: string | number): string {
    if (!value) { return ''; }

    if (typeof value === typeof 0) {
        value = (value as number).toFixed(2);
    }

    return String(value)
        .replace(PUNCTUATION_REGEX, '')
        .split('')
        .reverse()
        .reduce((acc, v, i) => {
            if (i === 2) { acc.push('.'); }

            if (i > 2 && (i - 2) % 3 === 0) { acc.push(','); }

            acc.push(v);

            return acc;
        }, [])
        .reverse()
        .join('');
}

/**
 * Parses number from a previously masked currency string
 *
 * @param value the currency string
 */
function parseNumber(value: string) {
    const parsedValue = value.replace(PUNCTUATION_REGEX, '');

    return Number.parseFloat(`${parsedValue.slice(0, -2)}.${parsedValue.slice(-2)}`);
}

export {
    maskCurrency,
    parseNumber
};
