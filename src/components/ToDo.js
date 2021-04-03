import "./ToDo.css";

function ToDo({ name, onDelete }) {
  function handleDeleteToDo() {
    onDelete(name);
  }
  return (
    <div className="list-container">
      <ul clasName="list">
        <li className="list-items">
          {name}

          <button className="RemoveButton" onClick={handleDeleteToDo}>
            {" "}
            X{" "}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ToDo;
