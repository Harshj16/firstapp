// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
// import Button from './Button'
// import { Heading2 } from './Heading'
// import Counter from './State'
import Login from './Login'

function App () {
  const [info] = useState()

  return (
    <div>
      <Login props={info} />
    </div>
  )
}

export default App
