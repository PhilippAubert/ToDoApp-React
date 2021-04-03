import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";
import { useState } from "react";

export default function App() {
  const [toDo, setToDo] = useState([]);

  function handleAddToDo(toDoItem) {
    const newToDo = [
      ...toDo,
      {
        name: toDoItem,
      },
    ];
    setToDo(newToDo);
  }

  function handleDeleteToDo(name) {
    const removedToDo = toDo.filter((toDo) => toDo.name !== name);
    setToDo(removedToDo);
  }

  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} />
      <ToDoList toDo={toDo} onDeleteToDo={handleDeleteToDo} />
    </div>
  );
}
