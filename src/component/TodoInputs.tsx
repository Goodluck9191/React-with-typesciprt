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
      <input
        value={input}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button type="submit">Add</button>
    </form>
  )
}