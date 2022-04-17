import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
    >
      <span style={{ color: todo.isDone ? "green" : "" ,textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function HandleTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
  };

  return (
    <Form onSubmit={handleSubmit}> 
      <h1><b>Add Todo</b></h1>
      <input type="text" className="input"  onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
       <input type="submit"/>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <HandleTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


