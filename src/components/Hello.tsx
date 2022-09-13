interface HelloProp {
  firstName: string
  lastName: string
}

const Hello = ({ firstName, lastName }: HelloProp) => {
  return (
    <>
      <h1>now is good {firstName} and {lastName} </h1>
    </>
  )
}

export default Hello
