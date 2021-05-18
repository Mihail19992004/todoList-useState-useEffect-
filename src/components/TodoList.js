import React from 'react'
import {Todo} from "./Todo";

export function TodoList({todos, setTodos, filteredTodos}) {
    return (<div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map(todo=> (
                <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} completed={todo.completed} id={todo.id}/>
            ))}
        </ul>
    </div>)
}