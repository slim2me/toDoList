import Popup from 'reactjs-popup';
import viewIcon from '../../assets/view.png';

const ShowPopup = ({ item }) => {
  console.log(item);

  return (
    <Popup trigger={<img src={viewIcon} alt="View Task" />} >
      {close => (
        <>
          <div className="itemData">
            <div>Task id : <span title={item.id}>{item.id.substr(0, 10)}...</span></div>
            <div>Task title : <span>{item.title}</span></div>
            <div>Created At : <span>{new Date(item.createdAt).toLocaleDateString()}</span></div>
            <div>Deadline : <span>{new Date(item.deadLine).toLocaleDateString()}</span></div>
            <div>State: <span>{item.completed ? "completed" : "not completed"}</span></div>
            <div>Featured: <span>{item.featured ? "Yes" : "No"}</span></div>
          </div>
        </>
      )}
    </Popup>
  );
};

export default ShowPopup;
