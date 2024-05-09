import React from 'react'
import './App.css'
import Header from './components/Header'
import Rotas from './config/Routes'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header/>
      <main>
        <Rotas/>
      </main>
      <Footer/>
    </>
  )
}

export default App
