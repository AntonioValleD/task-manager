import React from "react";
import './TaskCounter.css';

function TaskCounter({total, completed, setBlankTasks}) {
    if (total > 0){
        setBlankTasks(false);
    } else {
        setBlankTasks(true);
    }
    return (
        <h2 className="TaskCounter">Has completado {completed} de {total} tareas</h2>
    );
}

export { TaskCounter };
