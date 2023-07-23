import logo from './logo.svg';
import './App.css';
import { TodoApp } from './component/Todo';
import { AddTodo } from './component/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
     <TodoApp />
    </div>
  );
}

export default App;
