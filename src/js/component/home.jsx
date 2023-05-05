import React, {useState, useEffect} from "react";

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
  };//fin de funcion para agregar tareas a la lista utilizando fetch y useEffect


  const fetchTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofiafernandes")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

 return (
    <body>
      <div className="container d-flex" style={{backgroundColor:"#d9747485"}}>
        <div className="text-center" style={{backgroundColor:"beige",margin:"auto",fontFamily:"fantasy"}}>
          <form onSubmit={handleAddTask}>
            <input type="text" name="todo" placeholder="Add new task" style={{textAlign:"center",backgroundColor:"#cbd1b984",borderRadius:"10px",marginTop:"30px",marginLeft:"100px", marginRight:"10px"}} />
            <button type="submit" style={{borderRadius:"10px",marginRight:"100px",}}>Add New</button>
          </form>

          {todos.map((todo,index) => (
            <li className="d-flex" key= {index}>
              <div className="flex-grow-1">{todo.label}</div>
              <button style={{marginLeft:"10px"}} onClick={() => setTodos(todos.filter((task) => task.id !== todo.id))}>x</button>
            </li>
          ))}
        </div>
      </div>
    </body>
  );
}




export default TodoList;








