import 'reactjs-popup/dist/index.css';
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import Info from "./components/Info.jsx";
import Search from "./components/Search.jsx";


function App() {

  return (
    <section className="container">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="main">
        <AddTask />
        <Info />
        <TaskList />
      </div>
      <div className="footer" >
        <Search />
      </div>
    </section>
  );
}

export default App;