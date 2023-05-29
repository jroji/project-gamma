import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Project from './views/Project'
import Contact from './views/Contact'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Icon, { ICONMAP } from './components/Icon/Icon'

function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>

      <Link to="/">
        <Button type="primary">Projects <Icon name={ICONMAP.beer}></Icon></Button>
      </Link>
      <Button type="secondary">Contacto <Icon name={ICONMAP.people}></Icon></Button>
    </header>
    <main className='list'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  )
}

export default App
