import React from 'react';

// App Elements
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { TaskSearch } from "../TaskSearch/TaskSearch";
import { TaskList } from "../TaskList/TaskList";
import { TaskItem } from "../TaskItem/TaskItem";
import { CreateTaskButton } from "../CreateTaskButton/CreateTaskButton";
import { Modal } from '../AddUserTask/Modal';
import { AddUserTask } from '../AddUserTask/AddUserTask';
import { BlankTasks } from '../BlankTasks/BlankTasks';

function AppUI({
    totalTasks,
    completedTasks,
    searchValue,
    setSearchValue,
    shownTasks,
    changeDoneStatus,
    deleteTaskItem,
    openModal,
    setOpenModal,
    addNewTask,
    blankTasks,
    setBlankTasks
}) {
    return (
        <div className='main-container'>
            <TaskCounter
                total={totalTasks}
                completed={completedTasks}
                setBlankTasks={setBlankTasks}
            />
            <TaskSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {!!blankTasks && (
                <BlankTasks />
            )}
            <TaskList>
                {shownTasks.map(task => (
                    <TaskItem 
                        key={task.index}
                        index={task.index}
                        text={task.text}
                        done={task.done}
                        onComplete={() => changeDoneStatus(task.index)}
                        onDelete={() => deleteTaskItem(task.index)}
                    />
                ))}
            </TaskList>
            
            {!!openModal && (
                <Modal>
                    <AddUserTask
                        onCloseWindow={() => setOpenModal(false)}
                        addNewTask={addNewTask}
                    />
                </Modal>
            )}

            <CreateTaskButton
                onOpenWindow={() => setOpenModal(true)}
            />
        </div> 
    );
}

export {AppUI};