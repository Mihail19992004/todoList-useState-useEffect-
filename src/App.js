import React, {useEffect, useState} from "react";
import './style.css'
import {Header} from "./components/header";
import {Form} from "./components/Form";
import {TodoList} from "./components/TodoList";

function App() {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect(()=> {
        filterHandler()
        saveLocalTodos()
    }, [todos,status])
    function filterHandler() {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo=> todo.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo=> todo.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }
    const saveLocalTodos = () => {
        if(localStorage.getItem('todos')===null) {
            localStorage.setItem('todos', JSON.stringify([]))
        }else{
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }
  return (
    <>
      <Header inputText={inputText}/>
      <Form filteredTodos={filteredTodos} setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </>
  );
}

export default App;
