function Heading () {
  let title = 'This is heading text for practice.'
  return <h1>{title}</h1>
}

function Heading2 (props) {
  return <h1>{props.name}</h1>
}

export { Heading, Heading2 }
