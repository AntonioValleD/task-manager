import React from "react";
import './TaskSearch.css';

function TaskSearch({searchValue, setSearchValue}) {
    const onSerchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TaskSearch" 
            placeholder="buscar . . ."
            value={searchValue}
            onChange={onSerchValueChange}
        />
    );
}

export {TaskSearch};