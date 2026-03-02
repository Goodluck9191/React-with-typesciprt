import { useState, FormEvent } from "react"
import { TodoInput } from "./component/TodoInputs"
import { TodoList } from "./component/TodoList"
import { useLocalStorage } from "./hooks/useLocalStorage"
import type { Todo, FilterType } from "./types/types"

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(
    "todos",
    []
  )

  const [input, setInput] = useState<string>("")
  const [filter, setFilter] =
    useState<FilterType>("all")

  function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    if (input.trim() === "") return

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    }

    setTodos([...todos, newTodo])
    setInput("")
  }

  function handleDelete(id: number) {
    setTodos(todos.filter((t) => t.id !== id))
  }

  function handleToggle(id: number) {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    )
  }

  function handleEdit(id: number, text: string) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text } : t
      )
    )
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  return (
    <div>
      <h1>Professional Todo App</h1>

      <TodoInput
        input={input}
        setInput={setInput}
        onSubmit={handleSubmit}
      />

      <div>
        <button onClick={() => setFilter("all")}>
          All
        </button>
        <button onClick={() => setFilter("active")}>
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App
