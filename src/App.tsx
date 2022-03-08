import React, { useEffect, useState } from 'react';
import './App.css';
import { ToDoForm } from './Components/ToDoForm';
import { ToDoList } from './Components/ToDoList';

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);  

  const addToDo: AddToDo = newToDo => {
    console.log("inform that receieve new", newToDo)
    if(newToDo){
      setToDos([...toDos, {name: newToDo, completed: false}]);
      return
    }
  }

  const toggleComplete: ToggleComplete = (selectedTodo: ToDo) => {
    const updatedTodos = toDos.map((toDo: ToDo) => {
      if(toDo.name === selectedTodo.name){
        return {...toDo, completed: !toDo.completed}
      }
      return toDo;
    })
    setToDos( updatedTodos);
  }
  return ( 
    <div className="App">
      <h1>To Do App - TS Version</h1>
      <ToDoForm addToDo={addToDo}/>
      <ToDoList toDos={toDos} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
