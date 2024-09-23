import { v4 as uuidv4 } from 'uuid';
import addIcon from '../assets/add.png';
import TaskContext from '../context/TaskContext.jsx';
import { useContext, useEffect, useState } from 'react';

const AddTask = () => {
    const { addNewTask } = useContext(TaskContext);
    const [task, setTask] = useState("");
    const [error, setError] = useState(false);

    function handleChange(e) {
        const { value } = e.target;
        setTask(value);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setError(false);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [error]);


    function addItem() {
        if (task.length === 0) {
            setError(true);
        } else {
            const newId = uuidv4();
            const currentDate = new Date();
            const deadlineDate = new Date();
            deadlineDate.setDate(currentDate.getDate() + 3); // Default deadline 72 hours from now
            const capitalized = task.charAt(0).toUpperCase() + task.slice(1);
            addNewTask({
                id: newId,
                title: capitalized,
                createdAt: currentDate,
                deadLine: deadlineDate,
                completed: false,
                featured: false,
            });
            setTask("");
            setError(false);
        }
    }

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
                placeholder={error ? "Field cannot be empty!" : undefined} // Only show placeholder on error
                onChange={handleChange}
                type="text"
                value={task}
                className={error ? "error" : ""}
            />
            <img className="add" src={addIcon} onClick={addItem} alt="Add Task" />
        </form>
    );
};

export default AddTask;
