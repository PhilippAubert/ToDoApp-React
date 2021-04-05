import "./ToDo.css";

function ToDo({ name, onDelete, onToggle, isDone, buttonContent }) {
  function handleDeleteToDo() {
    onDelete(name);
  }

  function togglePendingButton() {
    onToggle(buttonContent);
  }

  return (
    <div className="list-container">
      <ul clasName="list">
        <li className="list-items">
          <button className="RemoveButton" onClick={handleDeleteToDo}>
            {" "}
            X{" "}
          </button>
          {name}
          <button className="PendingButton" onClick={togglePendingButton}>
            {isDone ? "Done" : "Pending"}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ToDo;
