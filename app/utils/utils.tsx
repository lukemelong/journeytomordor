const isLeapYear = (): boolean => {
    const year = new Date().getFullYear()

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

export const getDaysInMonth = (month: number): number => {
    let numOfDays: number = 0;
    switch(month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            numOfDays = 31
            break
        case 3:
        case 5:
        case 8:
        case 10:
            numOfDays = 30
            break
        case 1:
            numOfDays = isLeapYear() ? 29 : 28
            break
    }
    return numOfDays
}

interface MonthAndYear {
    month: number,
    year: number
}

export const changeCurrentDate = (currentMonth: number, currentYear: number, addMonth: boolean): MonthAndYear => {
    let nextMonth: number = -1
    let nextYear: number = currentYear

    if(addMonth) {
        if(currentMonth === 11) {
            nextMonth = 0
            nextYear++
        }
        else nextMonth = currentMonth + 1
    }
    else {
        if(currentMonth === 0) {
            nextMonth = 11
            nextYear--
        }
        else nextMonth = currentMonth - 1
    }

    return {
        month: nextMonth,
        year: nextYear
    }
}

export const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay()
}

export const getMonthName = (month: number): string => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return monthNames[month]
}