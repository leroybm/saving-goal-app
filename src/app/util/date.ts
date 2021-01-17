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

function monthsBetween(x: Date, y: Date) {
    let months = (y.getFullYear() - x.getFullYear()) * 12;
    return months - x.getMonth() + y.getMonth();
}

export {
    addMonths,
    monthsBetween
}