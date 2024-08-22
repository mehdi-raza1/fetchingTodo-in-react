import { useState } from "react";
import "./App.css";
import { Bounce, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import TodoButton from "./components/TodoButton";
import TodoData from "./components/TodoData";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function clickFetchTodos() {
    console.log("click checking");

    setLoading(true);

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
    }, 2000);
  }

  function todoToaster(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        toast.warn(`@: ${data.name} 
                     ${data.email}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          transition: Bounce,
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }

  return (
    <>
      <Navbar />
      <TodoButton clickFetchTodos={clickFetchTodos} />
      <TodoData
        toaster={todoToaster}
        loading={loading}
        setTodos={setTodos}
        todos={todos}
      />
    </>
  );
}

export default App;
