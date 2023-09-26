import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Home from './pages/Home'



function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation />
        <Home />
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
