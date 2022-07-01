import { useState } from "react";
import { days, months } from "../../variable"; 

export const useDateTime = () => {
    const getDate = val => {
        let date = new Date(val);
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        return {day: day, month: month, date: date.getDate(), year: date.getFullYear()}
    }
    const getDay = val => {
        let date = getDate(val);
        return date.day;
    }

    const getFullDate = val => {
        let date = getDate(val);
        return date;
    }

    return {getDay,getFullDate}
}