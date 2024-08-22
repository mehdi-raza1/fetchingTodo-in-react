import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Bounce, toast } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);


  // function MyException(error){
  //   this.name = error.name;
  //   this.message = error.message;
  //   this.customErrorMessage = function(){
  //     // console.log(`Getting An Error On Fetching: ${this.name} and the message is : ${this.message} `)
  //     const value =`Getting An Error On Fetching: ${this.name} and the message is : ${this.message} `
  //     return value
  //   }

  // }

  function clickFetchTodos() {
    console.log("click");
    // const showTodos = document.getElementById("showTodos");
    // const todosUL = document.createElement("ul");
    // const todosLI = document.createElement("li");
    setLoading(true);

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
          setLoading(false);
        })
        .catch((eror) => {
          console.log(eror);
          setLoading(false);
        });
    }, 2000);
  }

  function todoToaster(todoID, userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        toast.warn(`Name: ${data.name}, User Email: ${data.email}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          onClick: () => {
            console.log(`Toast clicked for user ID: ${todoID}`);
            setTodos(todos.filter((todo) => todo.id !== todoID));
            console.log(`Todos IS Deleted: ${todoID}`);
            // toast.dismiss()
          },
        });
      })
      .catch((error) => console.log(error));
  }
  return (
    <>
      <button
        onClick={clickFetchTodos}
        className="mt-4 ms-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Fetch Todos
      </button>
      <div id="showTodos">
        {loading ? (
          <h3 className="ms-3 mt-3">Loading...</h3>
        ) : (
          <ul className="w-1/2  mt-3 ms-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => todoToaster(todo.id, todo.userId)}
                className=" hover:bg-gray-100 border cursor-pointer p-2"
              >
                {todo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;

// {
//   if (!response.ok) {
//     throw new Error("Connection Issue");
//   }
//   return response.json();
// })
// .then((data) =>
