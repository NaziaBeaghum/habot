import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Rectangle from './Components/Navbar/Rectangle'
import Destination from './Components/Section/Destination'
import Buyer from './Components/Section/Buyer'
import Verify from './Components/Section/Verify'
import Link from './Components/Section/Link'

const App = () => {
  return (
    <div >
       <Navbar/>
       <Rectangle/>
       <Destination/>
       <Buyer/>
       <Verify/>
       <Link/>
       
       
    </div>
  )
}

export default App