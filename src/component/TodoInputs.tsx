import type { ChangeEvent, FormEvent } from "react"

type Props = {
  input: string
  setInput: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function TodoInput({
  input,
  setInput,
  onSubmit
}: Props) {
  function handleChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
         <label htmlFor="todo-input">Task</label>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Enter task"
        id="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  )
}