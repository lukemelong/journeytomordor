import styles from "~/styles/calendar/calendar.css"
import { useState } from "react"
import { getDaysInMonth, changeCurrentDate, getFirstDayOfMonth, getMonthName } from "~/utils/utils"


interface CalendarDateData {
    key: string,
    day: number
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}
const CalendarDate = ({day}: CalendarDateData) => {
    return (
        <div className="dateContainer">
            <p className="day">{day}</p>
        </div>
    )
}

export default function Calendar() {

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const daysInMonth: number = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear)
    const dayElems: Array<any> = []

    for(let i = 0; i < daysInMonth + firstDayOfMonth; i++){
        if(i < firstDayOfMonth) {
            dayElems.push(<div key={`${Date.now()}${i}`}></div>)
            continue
        }
        dayElems.push(<CalendarDate key={`${new Date(currentMonth, currentYear, i).getTime()}`} day={i - firstDayOfMonth + 1}/>)
    }

    const onChangeMonth = (add: boolean): void => {
        const { month, year } = changeCurrentDate(currentMonth, currentYear, add)

        setCurrentMonth(month)
        setCurrentYear(year)
    }
    return (
        <div>
            <div className="dateInformationContainer">
                <p>{`${getMonthName(currentMonth)}, ${currentYear}`}</p>
            </div>
            <div className="dateChangeContianer">
                <button onClick={() => onChangeMonth(false)}>Previous Month</button>
                <button onClick={() => onChangeMonth(true)}>Next Month</button>
            </div>
            <div className="calendarContainer">
                <>
                    <div key={'sundayDate'}>Sunday</div>
                    <div key={'mondayDate'}>Monday</div>
                    <div key={'tuesdayDate'}>Tuesday</div>
                    <div key={'wednesdayDate'}>Wednesday</div>
                    <div key={'thursdayDate'}>Thursday</div>
                    <div key={'fridayDate'}>Friday</div>
                    <div key={'saturdayDate'}>Saturday</div>
                    {
                        dayElems.map((elem) => elem)
                    }
                </>
            </div>
        </div>
    )
}

