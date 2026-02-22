import React, { useState } from "react";

const Todos = () => {
  type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    const UpdatedTodos = todos.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos(UpdatedTodos);
  };


  const handleDelete = (id:number, event: React.MouseEvent<HTMLButtonElement>) => {

    const filteredTodos = todos.filter((todo) => todo.id !== id)

    setTodos(filteredTodos)

  }

  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <h2>Todo application</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="todos">Enter todo</label>
            <input
              type="text"
              id="todos"
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
          </div>
          <button type="submit">Add todo</button>
        </form>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => handleToggle(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </span>
              <button onClick={(event) => handleDelete(todo.id, event)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
