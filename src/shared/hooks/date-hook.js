import { days, months } from "../../variable"; 

export const useDateTime = () => {
    const getFullDate = val => {
        let date = new Date(val);
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        return {day: day, month: month, date: date.getDate(), year: date.getFullYear()}
    }
    const getDay = val => {
        let date = getFullDate(val);
        return date.day;
    }

    return {getDay,getFullDate}
}