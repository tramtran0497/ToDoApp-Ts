import React, { useState, ChangeEvent, FormEvent } from "react";

interface ToDoFormProps {
    addToDo: AddToDo;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({addToDo}) => {
    const [newToDo, setNewToDo] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewToDo(event.target.value);
    }

    const handleClick = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addToDo(newToDo);
        setNewToDo("");
    }
    return(
        <form className="toDoForm">
            <input type="text" value={newToDo} placeholder="Enter your work..." className="toDoForm__input" onChange={handleChange}/>
            <button type="submit" className="toDoForm__btn" onClick={handleClick}>Add</button>
        </form>
    )
}