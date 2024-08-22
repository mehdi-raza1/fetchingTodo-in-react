import React from "react";

const TodoData = ({ toaster, loading, todos, setTodos }) => {
  function deleteLI(id, userId) {
    toaster(userId);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div id="showTodos" className="container mt-3 mx-auto flex justify-center">
      {loading ? (
        <h3 className="ms-3 mt-3 text-xl font-bold">Loading...</h3>
      ) : (
        <ul className="w-1/2 mt-3 ms-3">
          {todos?.map((todo) => (
            <li
              key={todo.id}
              onDoubleClick={() => deleteLI(todo.id, todo.userId)}
              className="hover:bg-slate-500 border-none bg-slate-400 border cursor-pointer p-2"
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoData;
