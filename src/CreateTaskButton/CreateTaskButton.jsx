import React from 'react';
import './CreateTaskButton.css';

function CreateTaskButton(props) {

    return (
        <button 
            className='CreateTaskButton'
            onClick={props.onOpenWindow}
        >
            +
        </button>
    );
}

export {CreateTaskButton};