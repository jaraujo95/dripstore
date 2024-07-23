import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/Home'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './pages/Rotas'
import Header from './components/Header'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  
   <Rotas></Rotas>
</BrowserRouter>
)
