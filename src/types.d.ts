
type AddToDo = (newToDo: string) => void;

type ToDo = {
    name: string;
    completed: boolean;
}

type ToggleComplete = (selectedTodo: ToDo) => void;