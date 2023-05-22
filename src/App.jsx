import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <header>
        <h1>Proyecto Gamma</h1>
        <Link to="/contact">Contacto</Link>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </FirestoreProvider>
  )
}

export default App
