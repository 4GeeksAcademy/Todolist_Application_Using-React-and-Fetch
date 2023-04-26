import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
function TodoList() {
	//se declaran las listas en un array 
  const [todos, setTodos] = useState([]);//array vacio


  //principio de funcion para agregar 
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
<body>
  <div className="container d-flex" style={{backgroundColor:"#d9747485"}}>
  <div className="text-center" style={{backgroundColor:"beige",margin:"auto",fontFamily:"fantasy"}}>
 
    <form onSubmit={handleAddTask}>  {/*Cuando se envía el formulario con onSubmit, se llama a la función handleAddTask */}
        <input type="text"
        name="todo"
        placeholder="Add new task"
        style={{textAlign:"center",backgroundColor:"#cbd1b984",borderRadius:"10px",marginTop:"30px",marginLeft:"100px", marginRight:"10px"}} />

       <button type="submit" style={{borderRadius:"10px",marginRight:"100px",}}>Add New</button>

    </form>

        {/* usamos el metodo map, para transformar nuestro actual array con una funcion dada..-"key" es una manera 
        que tiene react de ingresar directamente en los elemento del index */}
        {todos.map((todo,index) => ( 

        <li className="d-flex" key= {index}> 
        <div className="flex-grow-1"> 
        {todo}
        </div>
        <button style={{marginLeft:"10px"}} onClick={() => deleteTask(todo)}>x</button> </li>))}

</div>
</div>

</body>

  );


}


export default TodoList;








