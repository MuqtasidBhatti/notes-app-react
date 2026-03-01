import React from 'react'
<<<<<<< HEAD
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
=======
import Notes from './components/Notes'
>>>>>>> 5de4dc74d82a449e6fe2cbf52eeaf7e9d467afde

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

=======
      <Notes/>
>>>>>>> 5de4dc74d82a449e6fe2cbf52eeaf7e9d467afde
    </div>
  )
}

export default App
