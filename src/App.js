import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";
import { useState } from "react";

// const toDoArray = [
//   { name: "shoppingItem", status: "Pending" },
//   { name: "running", status: "Done" },
// ];

export default function App() {
  const [toDo, setToDo] = useState([]);

  function handleAddToDo(toDoItem) {
    const newToDo = [
      ...toDo,
      {
        name: toDoItem,
        status: "Pending",
      },
    ];
    setToDo(newToDo);
  }

  function handleDeleteToDo(name) {
    const removedToDo = toDo.filter((toDo) => toDo.name !== name);
    setToDo(removedToDo);
  }

  function togglePendingButton(buttonContent) {
    const newButtonContent = toDo.map((task) => {
      if (task.buttonContent === buttonContent) {
        return {
          ...task,
          isPending: !toDo.isPending,
        };
      } else {
        return toDo;
      }
    });
    setToDo(newButtonContent);
  }
  return (
    <div className="App">
      <Header onAddToDo={handleAddToDo} />
      <ToDoList
        toDo={toDo}
        onDeleteToDo={handleDeleteToDo}
        onClick={togglePendingButton}
      />
    </div>
  );
}
