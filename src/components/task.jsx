import { useContext } from 'react'
import TaskContext from '../context/TaskContext.jsx'
import featured from '../assets/featured.png'
import EditPopup from './popups/Edit.jsx'
import ShowPopup from './popups/Show.jsx'
import DeletePopup from './popups/Delete.jsx'

export default function Task({ todoItem }) {
    const { editTask } = useContext(TaskContext)

    const handleStatus = () => {
        todoItem.completed = !todoItem.completed
        editTask(todoItem)
    }
    return (
        <li>
            <div>
                <input
                    type="checkbox"
                    name="check"
                    value={todoItem.id}
                    onChange={handleStatus}
                    checked={todoItem.completed}
                />
                <span style={{ textDecoration: todoItem.completed ? 'line-through' : 'none' }}>
                    {todoItem.title}
                    {todoItem.featured && <img src={featured} title='Featured' />}
                </span>
            </div>
            <div>
                <ShowPopup item={todoItem} />
                <EditPopup item={todoItem} />
                <DeletePopup id={todoItem.id} />
            </div>
        </li>
    )
}
