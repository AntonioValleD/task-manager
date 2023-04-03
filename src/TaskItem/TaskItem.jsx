import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
    return (
        <li className={`TaskItem ${props.done ? 'TaskItem-complete' : undefined}`}>
            <span 
                className={`Icon Icon-check ${props.done ? 'Icon-check-done' : undefined}`}
                onClick={props.onComplete}
            >
                <p className={!props.done ? 'Check-false' : undefined}>✓</p>
            </span>
            <p className={`TaskItem-p ${props.done ? 'TaskItem-p--complete' : undefined}`}>
                {props.text}
            </p>
            <span 
                className='Icon Icon-delete'
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {TaskItem};