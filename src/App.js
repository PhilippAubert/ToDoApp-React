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
        status: false,
      },
    ];
    setToDo(newToDo);
  }

  function handleDeleteToDo(name) {
    const removedToDo = toDo.filter((toDo) => toDo.name !== name);
    setToDo(removedToDo);
  }

  function togglePendingButton(buttonContent) {
    /* iteriere über alle toDos, schaue nach, ob es ein todo gibt, weclhes den gleichen namen hat, wie "buttonContent" (toDo.name === buttonContent),
    dann ändere für exakt dieses todo den status */
    const newButtonContent = toDo.map((status) => {
      if (status.name === buttonContent) {
        return {
          ...status,
          status: !status.status,
        };
      } else {
        return status;
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
        onTogglePending={togglePendingButton}
      />
    </div>
  );
}
