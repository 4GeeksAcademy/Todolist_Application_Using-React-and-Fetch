import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

//se declara una lista de tareas (denominada todos) utilizando el hook useState.
// Este hook permite declarar variables de estado y actualizarlas en el componente. El estado inicial es un array vacío.
function TodoList() {
	//se declaran las listas en un array 
  const [todos, setTodos] = useState([]);//array vacio


  ///////////////////////////////////////principio de funcion para agregar
  //se define una función llamada handleAddTask que se ejecuta cuando el usuario hace clic en el botón "Add New" para agregar una nueva tarea a la lista. Esta función evita el evento por defecto utilizando preventDefault(). Luego, se obtiene el valor del input "todo" del formulario y se comprueba si tiene
  // algún texto escrito. Si es así, se agrega una nueva tarea a la lista utilizando setTodos(), que actualiza el estado de la variable todos.
  const handleAddTask = (ev) => {
    ev.preventDefault();	//propiedad que se coloca para evitar el evento por defecto.(preventDefault)
 
  const newTask = ev.target.todo.value;
    if (newTask !== "") { //" !== "comprueba si el input "todo" del formulario tiene algún texto escrito antes de agregar una nueva tarea a la lista.
      setTodos([...todos, newTask]);
      ev.target.todo.value = "";
    }
  };//fin de funcion para agregar tareas a la lista utilizando fetch y useEffect

//se define una función llamada fetchTodos que utiliza fetch() para obtener la lista de tareas desde una API. Cuando se obtiene la respuesta, 
//se convierte a JSON y se actualiza el estado de todos utilizando setTodos().
  const fetchTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/sofiafernandes")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  };

  // const deleteTask = (id) => { //continuar con esta funcion
  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/sofiafernandes/", id {
  //     method: "DELETE"
  //   })
  //   .then(() => fetchTodos())
  //   .catch((error) => console.log(error));
  // };

//se utiliza el hook useEffect para llamar a fetchTodos() una sola vez, cuando el componente se monta.
  useEffect(() => {
    fetchTodos();
  }, []);

 return ( //se muestra la lista de tareas en la interfaz. Para cada tarea en la lista, se muestra el label y un botón "x" que,
           // al hacer clic, llamará a una función deleteTask
    <body>
      <div className="container d-flex" style={{backgroundColor:"#d9747485"}}>
        <div className="text-center" style={{backgroundColor:"beige",margin:"auto",fontFamily:"fantasy"}}>
          <form onSubmit={handleAddTask}>
            <input type="text" name="todo" placeholder="Add new task" style={{textAlign:"center",backgroundColor:"#cbd1b984",borderRadius:"10px",marginTop:"30px",marginLeft:"100px", marginRight:"10px"}} />
            <button type="submit" style={{borderRadius:"10px",marginRight:"100px",}}>Add New</button>
          </form>
{/* //se usa el método map() de los arrays para recorrer cada elemento del array `todos` y crear una lista en la interfaz con la información de cada tarea. 
La función map() recibe una función de callback que se ejecuta por cada elemento del array. En este caso, la función de callback tiene dos parámetros: 
todo e index, que representan el elemento actual y su indice correspondiente en el array */}
          {todos.map((todo,index) => (
            //Se crea un elemento de lista (<li>) y un atributo key que tiene el valor del índice(index) de la tarea en el array.
            <li className="d-flex" key= {index}> 
              <div className="flex-grow-1">{todo.label}</div>
              <button style={{marginLeft:"10px"}} onClick={() => deleteTask(todo.id)}>x</button>
            </li>
          ))}
        </div>
      </div>
    </body>
  );
}




export default TodoList;








