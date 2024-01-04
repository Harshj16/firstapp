// import logo from './logo.svg'
// import { useState } from 'react'
import './App.css'
// import Button from './Button'
// import { Heading2 } from './Heading'
// import Counter from './State'
// import Login from './Login'
import Home from './Home'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'

function App () {
  // const [info] = useState()

  return (
    <div>
      <nav>
        <Link to='/home' className='nav-item'>
          Home
        </Link>
        <br/>
        <Link to='/about' className='nav-item'>
          About Me
        </Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
