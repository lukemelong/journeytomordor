const isLeapYear = (): boolean => {
    const year = new Date().getFullYear()

    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

export const getDaysInMonth = (month: number): number => {
    let numOfDays: number = 0;
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numOfDays = 31
            break
        case 4:
        case 6:
        case 9:
        case 11:
            numOfDays = 30
            break
        case 2:
            numOfDays = isLeapYear() ? 29 : 28
            break
    }
    return numOfDays
}

export const changeCurrentMonth = (currentMonth: number, addMonth: boolean): number => {
    let nextMonth: number = 0;
    if(addMonth) {
        if(currentMonth === 11) nextMonth = 0
        else nextMonth = currentMonth + 1
    }
    else {
        if(currentMonth === 0) nextMonth = 11
        else nextMonth = currentMonth - 1
    }

    return nextMonth
}

export const getFirstDayOfMonth = () => {
    return
}