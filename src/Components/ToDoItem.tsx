import React from "react";

interface ToDoItemProps {
    toDo: ToDo;
    toggleComplete: ToggleComplete;
}

export const ToDoItem: React.FC<ToDoItemProps> = ({toDo, toggleComplete}) => {
    return(
        <li className="toDoItem">
            {toDo.name} 
            <label />
            <input type="checkbox" checked={toDo.completed} onChange={() => toggleComplete(toDo)}/>
        </li>
    )
}