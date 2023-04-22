import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

function TodoList() {
	//se declaran las listas en un array 
  const [todos, setTodos] = useState([]);//array

//////////////////////////////////////////////////////////////////
  //principio de funcion para agregar 
  //la función handleAddTask se realizara cuando el usuario escriba en el input de agregar tarea. Primero se llama
  // al método preventDefault() para evitar el comportamiento por default de la recarga de la pagina. Luego,
  // se obtiene el valor del input  name:"todo"(nombre establecido en las propiedades del propio input) y se agrega 
  // a la variable de estado "todos" mediante la función setTodos..
  // Si el valor de newTask ( const newTask = ev.target.todo.value;)es una cadena vacía, no se agrega nada a la
  // lista y se vacía el input.
  const handleAddTask = (ev) => {
    ev.preventDefault();	//propiedad que se coloca para evitar el evento por defecto.(preventDefault)
 
  const newTask = ev.target.todo.value;
    if (newTask !== "") { //" !== "comprueba si el input "todo" del formulario tiene algún texto escrito antes de agregar una nueva tarea a la lista.
      setTodos([...todos, newTask]);
      ev.target.todo.value = "";
    }
  };//fin de funcion para agregar tareas a la lista


/////////////////////////////////////////////////////////////////
  //principio de funcion para eliminar tareas, el cual le agregaremos a nuestro evento "onclick en la linea 50"
  const deleteTask = (taskToDelete) => {
    //implementamos el metodo filter de los arrays, para crear un nuevo array con las 
    //tareas que no deseemos que sean eliminadas el cual las llamamos "taskToDelete"
    setTodos(todos.filter((task) => task !== taskToDelete));
  };
  //final de funcion de eliminar tareas del array.
////////////////////////////////////////////////////////////////

  return (
<div className="text-center">
 <div>
  
    <form onSubmit={handleAddTask}>  {/*Cuando se envía el formulario con onSubmit, se llama a la función handleAddTask */}

        <input type="text"
        name="todo"
        placeholder="Add new task" />

       <button type="submit">Add New</button>

    </form>

      <ol>
        {/* usamos el metodo map, para transformar nuestro actual array con una funcion dada..-"key" es una manera 
        que tiene react de ingresar directamente en los elemento del index */}
        {todos.map((todo,index) => (
          <li key= {index} onClick={()=>deleteTask(todo)} > {todo} </li>
        ))}
      </ol>
    </div>
</div>

  );


}

export default TodoList;








