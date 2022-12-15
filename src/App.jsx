import { useState } from 'react'
import './App.css'
import "react-bootstrap"
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from "./components/Skills"
// import 'bootstrap/dist/minty/bootstrap.min.css'
import  Projects  from "./components/Projects";
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
// import Theme from './components/Theme'


function App() {
  

  return (
    <div  >
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/* <Theme/> */}

    </div>
  )
}

export default App
