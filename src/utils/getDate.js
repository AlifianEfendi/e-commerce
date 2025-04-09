export function getDate(date) {
    const d = new Date(date);
    const dateString = {
        month: d.toLocaleString('default', { month: 'long' }),
        date: d.getDate(),
        year: d.getFullYear(),
    };

    return `${dateString.date}, ${dateString.month} ${dateString.year}`;
}