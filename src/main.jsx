import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

  // Por boas práticas, os componentes devem ser iniciados com letra maiúscula.

  <StrictMode>
    <App />
  </StrictMode>,
)
