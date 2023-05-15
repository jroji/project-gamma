import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Contacts from './views/Contacts'
import Settings from './views/Settings'
import Chat from './views/Chat/Chat'
import { useEffect, useState } from 'react'

function App() {
  let [showNav, setshowNav] = useState(false);
  // let location = useLocation();

  // useEffect(() => {
  //   setshowNav(false);
  // }, [location]);

  function changeClass() {
    setshowNav(!showNav);
  }

  function closeMenu() {
    setshowNav(false);
  }

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
      <button onClick={changeClass}>🍔</button>
    </header>

    { showNav === true
      ? <nav className='nav'>
          <Link onClick={closeMenu} to='/'>Home</Link>
          <Link onClick={closeMenu} to='/settings'>Home</Link>
        </nav>
      : ''}

    <main onClick={closeMenu}>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/chat/:perrete" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
    </>
  )
}

export default App
