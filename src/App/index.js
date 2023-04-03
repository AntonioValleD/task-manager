import React from "react";
import { AppUI } from "./AppUI";

// Task controller
import { deleteTask } from "../controllers/task.controller";
import { changeTaskStatus } from "../controllers/task.controller";
import { userTasks } from "../controllers/task.controller";

//import './App.css';


function App() {
  // Use States Hooks
  const [tasks, setTasks] = React.useState(userTasks);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [blankTasks, setBlankTasks] = React.useState(true);
  

  const completedTasks = tasks.filter(task => !!task.done).length;
  const totalTasks = tasks.length;

  let shownTasks = [];
  
  if (!searchValue.length >= 1){
    shownTasks = tasks;
  } else {
    shownTasks = tasks.filter(task => {
      const taskText = task.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskText.includes(searchText);
    })
  }

  const changeDoneStatus = (index) => {
    changeTaskStatus(index);
    const newTask = [...userTasks];
    setTasks(newTask);
  };

  const deleteTaskItem = (index) => {
    deleteTask(index);
    const remainingTasks = [...userTasks];
    setTasks(remainingTasks);
  };

  const addNewTask = () => {
    const updatedTasks = [...userTasks];
    setTasks(updatedTasks);
  };

  return (
    <AppUI
      totalTasks={totalTasks}
      completedTasks={completedTasks}

      searchValue={searchValue}
      setSearchValue={setSearchValue}
      shownTasks={shownTasks}

      changeDoneStatus={changeDoneStatus}
      deleteTaskItem={deleteTaskItem}

      openModal={openModal}
      setOpenModal={setOpenModal}
      addNewTask={addNewTask}

      blankTasks={blankTasks}
      setBlankTasks={setBlankTasks}
    />
  );
}

export default App;
