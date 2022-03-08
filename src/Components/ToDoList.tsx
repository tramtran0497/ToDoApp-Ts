import React from "react";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
    toDos: ToDo[];
    toggleComplete: ToggleComplete;
}

export const ToDoList: React.FC<ToDoListProps> = ({toDos, toggleComplete}) => {
    return(
        <div className="toDoList">
            <ul>
                {toDos.map(toDo => <ToDoItem toDo={toDo} toggleComplete={toggleComplete}/>) }
            </ul>
        </div>
    )
} 