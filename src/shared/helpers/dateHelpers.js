const dateHelpers = (date1, date2) => {
    let d1, d2 = '';
    d1 = date1.month;
    //if the months are different, point to both places.
    //if the years are different, of course the months are also different.
    if(date1.month < date2.month) {
        d2 += date2.month;
    }
    d1 += " " + date1.date;
    //if different years, show years in both places.
    if(date1.year < date2.year) {
        d1 += date1.year;
    }
    d2 += date2.date + " " + date2.year;

    return `${d1} - ${d2}`;
}

export default dateHelpers;