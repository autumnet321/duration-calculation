const { differenceInDays, differenceInWeeks, differenceInMonths, parseISO } = require('date-fns');

function calculateDuration(startDate, endDate) {
    const start = parseISO(startDate);
    const end = parseISO(endDate);

    const days = differenceInDays(end, start);
    const weeks = differenceInWeeks(end, start);
    const months = differenceInMonths(end, start);

    return {
        days,
        weeks,
        months
    };
}

const startDate = '2023-01-01';
const endDate = '2024-01-01';

const duration = calculateDuration(startDate, endDate);
console.log(`Days: ${duration.days}, Weeks: ${duration.weeks}, Months: ${duration.months}`);
