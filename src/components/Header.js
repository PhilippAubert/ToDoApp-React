import "./Header.css";

function Header({ onAddToDo }) {
  function handleAdd(event) {
    event.preventDefault();
    const form = event.target;
    onAddToDo(form.todoinput.value);
    form.reset();
  }
  return (
    <div class="mainFrame">
      <header className="header">
        <h1 className="headline">To Do List</h1>
        <div className="inputField">
          <form onSubmit={handleAdd} className="form">
            <input
              type="text"
              name="todoinput"
              id="todoinput"
              placeholder="Type in item.   Press <return> to add"
              className="input"
            />
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
