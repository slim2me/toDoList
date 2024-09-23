import  { useState,useContext } from "react";
import TaskContext from '../../context/TaskContext.jsx'
import editIcon from '../../assets/edit.png'
import Popup from 'reactjs-popup';

 const EditPopup=({ item })=> {
    const {editTask}=useContext(TaskContext)

    const [taskTitle, setTaskTitle] = useState(item.title);
    const [taskDeadline, setTaskDeadline] = useState(formatDateForInput(new Date(item.deadLine)));
    const [taskFeatured, setTaskFeatured] = useState(item.featured);

    function formatDateForInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    function handleUpdate(close) {
        editTask({
            ...item,
            title: taskTitle,
            deadLine: new Date(taskDeadline),
            featured: taskFeatured,
        }
        );
        close();
    }

    return (
        <Popup trigger={<img src={editIcon} />} modal >
            {close => (
                <>
                    <div className="itemDataForm" >
                        <div>
                            <label htmlFor="taskTitle">Task Title:</label>
                            <input
                                type="text"
                                id="taskTitle"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="taskDeadline">Deadline:</label>
                            <input
                                type="date"
                                id="taskDeadline"
                                value={taskDeadline}
                                onChange={(e) => setTaskDeadline(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="taskFeatured">Featured:</label>
                            <input
                                type="checkbox"
                                id="taskFeatured"
                                checked={taskFeatured}
                                onChange={(e) => setTaskFeatured(e.target.checked)}
                            />
                        </div>
                        <div className="formButtons">
                            <button className="button save" onClick={() => handleUpdate(close)}>Save</button>
                            <button className="button cancel"
                                onClick={() => { close(); }}>Cancel</button>
                        </div>
                    </div>
                </>
            )}
        </Popup>
    )
}

export default EditPopup;