import { useState } from 'react'

export default function Counter (props) {
  const [num, setNum] = useState(props.initialValue)
  const addValue = () => {
    const updatedNum = num + 1
    setNum(updatedNum)

    if (updatedNum > 20) {
      alert('Cannot go above 20')
      setNum(20)
    }
  }

  const removeValue = () => {
    setNum(num - 1)
  }

  return (
    <>
      <h1>The timer value is {num} </h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}
