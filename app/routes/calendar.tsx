import styles from "~/styles/calendar/calendar.css"
import { useState } from "react"
import { getDaysInMonth, changeCurrentMonth } from "~/utils/utils"


interface CalendarDateData {
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
    const daysInMonth: number = getDaysInMonth(currentMonth)

    console.log(daysInMonth)

    const dayElems: Array<any> = []
    for(let i = 1; i <= daysInMonth; i++){
        dayElems.push(<CalendarDate day={i}/>)
    }

    console.log(dayElems)
    return (
        <div>
            <button onClick={() => setCurrentMonth(changeCurrentMonth(currentMonth, false))}>Previous Month</button>
            <button onClick={() => setCurrentMonth(changeCurrentMonth(currentMonth, true))}>Next Month</button>
            <div className="calendarContainer">
                <>
                    <div>Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                    {
                        dayElems.map((elem) => elem)
                    }
                </>
            </div>
        </div>
    )
}