import React from 'react';
import './BlankTasks.css';

function BlankTasks(){
    return (
        <div className='blank-text'>
            <h3>
                Presiona el boton <span className='blank-icon'>+</span> para agregar una nueva tarea
            </h3>
        </div>
    );
}

export {BlankTasks}