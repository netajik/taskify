import React from 'react';
import { Todo } from '../model/Todo';
import  './styles.css';
import SingleTodo from './SingleTodo';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({
    todos,
    setTodos
}) => {
    return (
        <div className="todos">
            {todos.map((todo)=>(
                <SingleTodo index={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default TodoList;
