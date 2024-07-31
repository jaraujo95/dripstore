import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import Rotas from './pages/Rotas'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter basename="https://albertverso.github.io/dripstore">
   <Rotas></Rotas>
</BrowserRouter>
)
