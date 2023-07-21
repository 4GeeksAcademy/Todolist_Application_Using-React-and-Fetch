import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const counter = () => {
    if (todos.length === 0) {
      return <p> ¡There are no pending tasks! 🍻</p>;
    } else if (todos.length === 1) {
      return <p> ¡You have 1 Pending Task! 🤟</p>;
    } else {
      return <p> ¡You have {todos.length} pending tasks! 💩</p>;
    }
  };

  const getTodo = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofi22540")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };

  const updateTodos = () => {
    let newTask = { label: inputValue, done: true };
    setTodos([...todos, newTask]);
  };

  const updateBack = () => {
    
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofi22540", {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInputValue("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleClearAllTasks = () => {
    const updateTodos = [];
    setTodos(updateTodos);
    // Actualizar la lista vacía en el servidor
  };

  useEffect(() => {
    updateBack();
  }, [todos]);  

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
          {todos.map((el, indice) => (
            <li className="d-flex" key={indice} style={{ color: "black" }}>
              <div className="flex-grow-1">{el.label}</div>
              <button style={{ marginLeft: "10px" }} onClick={() => setTodos(todos.filter((_, index)=> indice!==index))}>
                x
              </button>
            </li>
          ))}
            <p style={{ marginLeft: "10px", color:"#adcb7e", fontSize: "2rem", fontFamily : "cursive"}}> {counter()} </p>
           <button onClick={handleClearAllTasks} style={{ marginTop: "20px" }}>
            Clear All Tasks
          </button> 
        </div>
      </div>
    </body>
  );
}

export default TodoList;
