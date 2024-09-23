import { dayOfMonth, dayName, monthName } from '../utils/date.js'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext.jsx'

const Info = () => {

    const {tasks}=useContext(TaskContext)
    return (
        <>
            <div className="date">
                <span>
                    {dayName} / {dayOfMonth} /{monthName}
                </span>
                <span className="total">
                    Total : {tasks && tasks.length}
                </span>
            </div>
            <hr />
        </>
    )
}
export default Info