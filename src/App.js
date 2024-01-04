// import logo from './logo.svg'
// import { useState } from 'react'
import './App.css'
// import Button from './Button'
// import { Heading2 } from './Heading'
// import Counter from './State'
// import Login from './Login'
import Home from './Home'
import About from './About'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'

function App () {
  // const [info] = useState()

  return (
    <div>
      <nav>
        <Link to='/' className='nav-item'>
          Homepage
        </Link>
        <Link to='/about' className='nav-item'>
          About Little Lemon
        </Link>
        <Link to='/contact' className='nav-item'>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
