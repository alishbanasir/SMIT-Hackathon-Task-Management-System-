import React, { useState } from "react";
import Headerpage from "../routes/Headerpage";

const Dashboard = () => {
  let initTodo = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initTodo);

  const [title, setTitle] = useState("");

  const addtodo = (title) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const newTodo = {
      sno: todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1,
      title,
      dateAdded: formattedDate,
      status: "todo",
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const onDelete = (todo) => {
    const filteredTodos = todos.filter((item) => item !== todo);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const onMove = (todo, newStatus) => {
    const updatedTodos = todos.map((t) => {
      if (t.sno === todo.sno) t.status = newStatus;
      return t;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addtodo(title);
      setTitle("");
    } else {
      alert("Please fill in the title");
    }
  };

  return (
    <div className="bg-[rgba(234,250,237,1)] min-h-screen">
      <Headerpage />

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mt-5 text-[rgba(28,94,85,255)] mb-6">
          <b>Task Organizer</b>
        </h2>

        <div className="flex justify-center mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-1/2"
          >
            <input
              type="text"
              name="title"
              className="border px-4 py-3 bg-white border-[rgba(28,94,85,255)] text-center rounded-md w-full"
              placeholder="enter your task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 border-2 border-[rgba(28,94,85,255)] text-white px-6 py-3 rounded-md"
            >
              AddTask
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-transparent shadow-[rgba(28,94,85,255)] p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[rgba(28,94,85,255)] mb-4">
              To Do
            </h3>
            {todos.filter((todo) => todo.status === "todo").length === 0 ? (
              <p>No tasks in To Do</p>
            ) : (
              todos
                .filter((todo) => todo.status === "todo")
                .map((todo) => (
                  <div
                    key={todo.sno}
                    className="bg-gray-100 p-4 rounded-md mb-4 w-full"
                  >
                    <h5 className="font-semibold text-center">{todo.title}</h5>
                    <p className="text-center text-sm text-gray-500">
                      {todo.dateAdded}
                    </p>{" "}
                    <div className="flex flex-col mt-2 gap-2">
                      <button
                        onClick={() => onMove(todo, "inprogress")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-md"
                      >
                        Move to In Progress
                      </button>
                      <button
                        onClick={() => onDelete(todo)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>

          <div className="bg-transparent shadow-[rgba(28,94,85,255)] p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[rgba(28,94,85,255)] mb-4">
              In Progress
            </h3>
            {todos.filter((todo) => todo.status === "inprogress").length ===
            0 ? (
              <p>No tasks in Progress</p>
            ) : (
              todos
                .filter((todo) => todo.status === "inprogress")
                .map((todo) => (
                  <div
                    key={todo.sno}
                    className="bg-gray-100 p-4 rounded-md mb-4 w-full"
                  >
                    <h5 className="font-semibold text-center">{todo.title}</h5>
                    <p className="text-center text-sm text-gray-500">
                      {todo.dateAdded}
                    </p>
                    <div className="flex flex-col mt-2 gap-2">
                      <button
                        onClick={() => onMove(todo, "done")}
                        className="bg-green-500 hover:bg-green-600 text-white py-1 rounded-md"
                      >
                        Move to Done
                      </button>
                      <button
                        onClick={() => onDelete(todo)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>

          <div className="bg-transparent shadow-[rgba(28,94,85,255)] p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-bold text-[rgba(28,94,85,255)] mb-4">
              Done
            </h3>
            {todos.filter((todo) => todo.status === "done").length === 0 ? (
              <p>No Completed Tasks</p>
            ) : (
              todos
                .filter((todo) => todo.status === "done")
                .map((todo) => (
                  <div
                    key={todo.sno}
                    className="bg-gray-100 p-4 rounded-md mb-4 w-full"
                  >
                    <h5 className="font-semibold text-center line-through">
                      {todo.title}
                    </h5>
                    <p className="text-center text-sm text-gray-500">
                      {todo.dateAdded}
                    </p>
                    <div className="flex flex-col mt-2 gap-2">
                      <button
                        onClick={() => onDelete(todo)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
