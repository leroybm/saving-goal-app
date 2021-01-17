/**
 * Adds a number of months to a given date
 * 
 * @param oldDate 
 * @param months 
 */
function addMonths(oldDate: Date, months: number): Date {
    const newDate = new Date(oldDate);
    newDate.setMonth(oldDate.getMonth() + months);
    
    return newDate;
}

export { addMonths }