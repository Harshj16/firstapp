export default function Button () {
  const clicked = () => {
    console.log('Clicked')
  }
  return <button onClick={clicked}>Click Me</button>
}
