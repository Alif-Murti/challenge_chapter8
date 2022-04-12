import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'

import { Routers } from './Routers/Routers'

import NavibarHome from './Components/NavibarHome/NavibarHome'

const App = () => {
  return (
   <BrowserRouter>
    <Routers />
   </BrowserRouter>
  )
}

export default App