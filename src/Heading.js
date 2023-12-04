function Heading () {
  let title = 'This is heading text for practice.'
  return <h1>{title}</h1>
}

function Heading2 (test) {
  return <h1>{test.children}</h1>
}

export { Heading, Heading2 }
