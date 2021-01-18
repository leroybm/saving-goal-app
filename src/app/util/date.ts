/**
 * Adds a number of months to a given date
 *
 * @param oldDate the date to be used as basis for the addition
 * @param months the number of months to be added
 */
function addMonths(oldDate: Date, months: number): Date {
    const newDate = new Date(oldDate);
    newDate.setMonth(oldDate.getMonth() + months);

    return newDate;
}

/**
 * Gets the value of difference of months between two dates
 */
function monthsBetween(x: Date, y: Date): number {
    const months = (y.getFullYear() - x.getFullYear()) * 12;
    return months - x.getMonth() + y.getMonth();
}

export {
    addMonths,
    monthsBetween
};
