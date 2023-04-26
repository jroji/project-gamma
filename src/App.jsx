import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './views/Styleguide'

function App() {
 
  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
      <Link to="/contact">Contacto</Link>
      <Link to="/home">Home</Link>
      <Link to="/styleguide">Styleguide</Link>

    </header>
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<Styleguide />} />
        
      </Routes>
    </main>
    </>
  )
}

export default App
