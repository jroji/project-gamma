import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './views/Contacts'
import Settings from './views/Settings'
import Chat from './views/Chat/Chat'

function App() {

  return (
    <>
    <header>
      <h1>Proyecto Gamma</h1>
    </header>
    <main>
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
