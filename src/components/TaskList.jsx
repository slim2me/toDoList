import TaskContext from '../context/TaskContext.jsx'
import { useContext } from 'react'
import Task from './task.jsx'

const TaskList = () => {

    const {tasks,search}=useContext(TaskContext)

    const filteredTasks =tasks.filter((task) =>(task.title.toLowerCase().includes(search.toLowerCase())))
    return (
        <div>
            {filteredTasks.length > 0 ? (
                <ul>
                    {filteredTasks.map((todoItem) => (
                            <Task key={todoItem.id} todoItem={todoItem}  />
                        ))
                    }
                </ul>
            ) : (
                <span>Empty list!</span>
            )}
        </div>

    )
}
export default TaskList