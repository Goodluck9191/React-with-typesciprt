
interface Props {
  name:string,
  age: number
}

const Prerson = (props: Props) => {
  return (
    <div>
      <p>My name is {props.name}</p>
      <p>And my age is {props.age}</p>
    </div>
  )
}

export default Prerson