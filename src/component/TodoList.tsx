import type { Todo } from "../types/types"
import { TodoItem } from "./TodoItem"

type Props = {
  todos: Todo[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
  onEdit: (id: number, text: string) => void
}

export function TodoList({
  todos,
  onDelete,
  onToggle,
  onEdit
}: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}