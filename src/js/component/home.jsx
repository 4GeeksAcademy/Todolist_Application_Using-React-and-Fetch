import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue]= useState("");

  const counter = () => {
    if (todos.length==0) {
      return (<p>No hay Tareas Pendientes</p>)
    }
    else if (todos.length==1 ) {
      return (<p>Tienes 1 Tarea Pendiente</p>)
    }
    else {
      return (<p>Tienes {todos.length} Tareas Pendientes</p>)
    }
    
  }

  const getTodo = () => {

    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofi22540")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
}
//FETCH PARA ACTUALIZAR(PUT)
  const updateTodos = () => {
    let newTask = {"label":inputValue, "done":true}
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofi22540", {
      method: "PUT",
      body: JSON.stringify([...todos,newTask]),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos,newTask])
        setInputValue(" ")
      })
      .catch((error) => {
        console.log(error);
      })
  };

   const handleClearAllTasks = () => {
   const updatedTodos = [];
   setTodos(updatedTodos);
  // Actualizar la lista vacía en el servidor
   updateTodos(updatedTodos);
  };

   useEffect(() => {
     getTodo();
    }, []);
  
  return (
    <body>
      <div className="container d-flex" style={{ backgroundColor: "#d9747485" }}>
        <div className="text-center" style={{ backgroundColor: "beige", margin: "auto", fontFamily: "fantasy" }}>
          <form onSubmit={updateTodos}>
            <input
              onChange={(e)=>setInputValue(e.target.value)} 
              value={inputValue}           
              type="text"
              name="todo"
              placeholder="Add new task"
              style={{ textAlign: "center", backgroundColor: "#cbd1b984", borderRadius: "10px", marginTop: "30px", marginLeft: "100px", marginRight: "10px" }}
            />
            <button type="submit" style={{ borderRadius: "10px", marginRight: "100px" }}>
              Add New
            </button>
          </form>
          {todos.map((todo, indice) => (
            <li className="d-flex" key={indice} style={{ color: "black" }}>
              <div className="flex-grow-1">{todo.label}</div>
              <button style={{ marginLeft: "10px" }} onClick={() => setTodos(todos.filter((element, index)=> indice!==index))}>
                x
              </button>
            </li>
          ))}
            <p> {counter()} </p>
           <button onClick={handleClearAllTasks} style={{ marginTop: "20px" }}>
            Clear All Tasks
          </button> 
        </div>
      </div>
    </body>
  );
}

export default TodoList;
