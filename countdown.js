const weekdays = document.getElementById('weekdays');
const schooldays = document.getElementById('schooldays');

const LEDIGA_DAGAR = new Set([
    "2026-05-13",
    "2026-05-14",
    "2026-05-15",
    "2026-05-18",
]);

const SOMMARLOV = new Date("2026-06-10");

function isSchoolDay(date) {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const dateStr = date.toISOString().slice(0, 10);
    const isLedigdag = LEDIGA_DAGAR.has(dateStr);

    return !isWeekend && !isLedigdag
}

function countSchoolDays(from, to) {
    let count = 0;

    let current = new Date(from);

    while (current < to) {
        if (isSchoolDay(current)) {
            count++;
        }

        current.setDate(current.getDate() + 1);
    }

    return count;
}

function countCalendarDays(from, to) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((to - from) / msPerDay);
}

const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const schoolDaysLeft = countSchoolDays(tomorrow, SOMMARLOV);
const calenderDaysLeft = countCalendarDays(tomorrow, SOMMARLOV);

schooldays.textContent = schoolDaysLeft;
weekdays.textContent = calenderDaysLeft;








// 13 maj
// 14 maj
// 15 maj

// 9 maj
// 10 maj
// 16 maj
// 17 maj
// 23 maj
// 24 maj
// 30 maj
// 31 maj
// 6 juni
// 7 juni
