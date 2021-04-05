import "./ToDo.css";
import ToDo from "./ToDo.js";

function ToDoList({ toDo, onClick, onDeleteToDo }) {
  function renderToDos() {
    return toDo.map((todoinput, index) => {
      return (
        <ToDo
          buttonContent={todoinput.status}
          key={todoinput.name}
          name={todoinput.name}
          onDelete={onDeleteToDo}
          onClick={onClick}
        />
      );
    });
  }
  return <ul>{renderToDos()}</ul>;
}

export default ToDoList;
