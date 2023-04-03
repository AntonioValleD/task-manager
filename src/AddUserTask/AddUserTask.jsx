import React from 'react';
import './AddUserTask.css';
import { addTask } from "../controllers/task.controller";

function AddUserTask({addNewTask, onCloseWindow}){
    let taskValue = '';
    const newTaskValue = (event) => {
        taskValue = event.target.value;
    }
    
    const addTaskUser = () => {
        addTask(taskValue);
        addNewTask();
        onCloseWindow();
    }

    return (
        <div className='add-task'>
            <span 
                className='Icon Icon-cancel'
                onClick={onCloseWindow}
            >
                X
            </span>
            <input
                className='add-task-input' 
                type="text"
                placeholder='Nueva tarea . . .'
                onChange={newTaskValue}
            />
            <button 
                className='add-task-button'
                onClick={addTaskUser}
            >
                Guardar
            </button>
        </div>
    );
}

export {AddUserTask};
