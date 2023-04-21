import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function TodoList() {
	//se declaran las listas en un array 
  const [todos, setTodos] = useState([]);

  // esta funcion es para agregar tarea
  const handleAddTask = (ev) => {
	//propiedad que se coloca para evitar el evento por defecto.(preventDefault)
    ev.preventDefault();
 
    const newTask = ev.target.todo.value;
	//aqui hacemos un if para que cuando se escriba algo en el input se agregue como 
	//una nueva tarea.
    if (newTask !== "") {
      setTodos([...todos, newTask]);
      ev.target.todo.value = "";
    }
  };

  const deleteTask = (todos.filter((todos,index,arr)) => { arr.pop();
return todos.length === "")};

	return(value ==="" )
	console.log(value)
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text"
		 name="todo"
		  placeholder="Add new task" />

        <button type="submit">Add New</button>

      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={()=>deleteTask(todo)} > {todo} </li>
        ))}
      </ul>
    </div>
  );


}

export default TodoList;








