import  {useContext } from "react";
import TaskContext from '../../context/TaskContext.jsx'
import Popup from 'reactjs-popup';
import deleteIcon from '../../assets/delete.png';

const DeletePopup = ({ id}) => {
    const {deleteTask}=useContext(TaskContext)

    const handleDelete = ()=>{
        deleteTask(id)
    }
    return (
        <Popup trigger={<img src={deleteIcon} />} position="top right"  >
            {close => (
                <>

                    <div className="deleteContainer">
                        <button className="button delete" onClick={handleDelete}>Delete</button>
                        <button className="button close" onClick={close}>No</button>
                    </div>
                </>
            )}
        </Popup>
    )}





export default DeletePopup