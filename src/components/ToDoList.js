import "./ToDo.css";
import ToDo from "./ToDo.js";

function ToDoList({ toDo, onDeleteToDo }) {
  function renderToDos() {
    return toDo.map((todoinput, index) => {
      return (
        <ToDo
          key={todoinput.name}
          name={todoinput.name}
          onDelete={onDeleteToDo}
        />
      );
    });
  }
  return <ul>{renderToDos()}</ul>;
}

export default ToDoList;
