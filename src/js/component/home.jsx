import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTask = (ev) => {
    ev.preventDefault();
    const newTaskLabel = ev.target.todo.value;
    if (newTaskLabel !== "") {
      const newTask = {
        id: Date.now(), // Asigna un ID unico a la tarea
        label: newTaskLabel
      };
      const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
    ev.target.todo.value = "";

      // Actualizar la lista en el servidor
      updateTodos(updatedTodos);
    }
  };

  const fetchTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofiafernandes")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const updateTodos = (updatedTodos) => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofiafernandes", {
      method: "PUT",
      body: JSON.stringify(updatedTodos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.ok);
        console.log(response.status);
        console.log(response.text());
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // Actualizar la lista en el servidor
    updateTodos(updatedTodos);
  };

   const handleClearAllTasks = () => {
   const updatedTodos = [];
   setTodos(updatedTodos);

  // Actualizar la lista vacía en el servidor
   updateTodos(updatedTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <body>
      <div className="container d-flex" style={{ backgroundColor: "#d9747485" }}>
        <div className="text-center" style={{ backgroundColor: "beige", margin: "auto", fontFamily: "fantasy" }}>
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              name="todo"
              placeholder="Add new task"
              style={{ textAlign: "center", backgroundColor: "#cbd1b984", borderRadius: "10px", marginTop: "30px", marginLeft: "100px", marginRight: "10px" }}
            />
            <button type="submit" style={{ borderRadius: "10px", marginRight: "100px" }}>
              Add New
            </button>
          </form>
          {todos.map((todo) => (
            <li className="d-flex" key={todo.id} style={{ color: "black" }}>
              <div className="flex-grow-1">{todo.label}</div>
              <button style={{ marginLeft: "10px" }} onClick={() => handleDeleteTask(todo.id)}>
                x
              </button>
            </li>
          ))}
           <button onClick={handleClearAllTasks} style={{ marginTop: "20px" }}>
            Clear All Tasks
          </button> 
        </div>
      </div>
    </body>
  );
}

export default TodoList;
