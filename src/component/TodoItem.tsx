import { useState, type ChangeEvent } from "react"
import type { Todo } from "../types/types"

type Props = {
  todo: Todo
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onEdit: (id: number, text: string) => void
}

export function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit
}: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  function handleEditChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setEditText(e.target.value)
  }

  function handleSave() {
    if (editText.trim() === "") return
    onEdit(todo.id, editText)
    setIsEditing(false)
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={handleEditChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
      <button
            type="button"
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              cursor: "pointer"
            }}
            aria-pressed={todo.completed}
          >
            {todo.text}
          </button>

 

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}