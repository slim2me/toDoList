import { createContext, useState,useEffect } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [search, setSearch] = useState("");

  const addNewTask = (task) => {
    setTasks((prevTasks) => ([task, ...prevTasks]));
  };

  const editTask = (data) => {
    console.log(data);
    setTasks(prevTasks => prevTasks.map(task => task.id === data.id ? { ...data } : task))
  }

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const clear = () => {
    setTasks([])
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); 
  return (
    <TaskContext.Provider value={{
      tasks,
      addNewTask,
      search,
      setSearch,
      editTask,
      deleteTask,
      clear
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;