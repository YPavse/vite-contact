import { useState } from 'react'
import './App.css'
import Navigator from './components/Navigator/Navigator'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Contact from './components/Contact/Contact'


function App() {

  return (
   <div>
    <Navigator/>
    <maim className="contactMain">
    <ContactHeader/>
    <Contact/>
    </maim>
    </div>
  )
}

export default App
