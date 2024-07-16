import React from 'react'
import ReactDOM from 'react-dom/client'
import Destaques from './destaques.jsx'
import Conteiner1 from './conteiner1.jsx'
import Conteiner2 from './conteiner2.jsx'
import Conteiner3 from './conteiner3.jsx'

ReactDOM.createRoot(document.getElementById('destaques')).render(
  <React.StrictMode>
    <Destaques />
    <Conteiner1 />
    <Conteiner2 />
    <Conteiner3 />
  </React.StrictMode>,
)