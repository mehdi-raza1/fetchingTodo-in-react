import React from "react";

const TodoButton = ({ clickFetchTodos }) => {
  // const clickFetchTodos = prop
  return (
    <>
      <div className="container mx-auto flex justify-center">
        <button
          onClick={clickFetchTodos}
          className="mt-4 ms-3 flex justify-center float bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Todos
        </button>
      </div>
    </>
  );
};

export default TodoButton;
