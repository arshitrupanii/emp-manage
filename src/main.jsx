import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovidor from './context/Authprovidor.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovidor>
      <App />
    </Authprovidor>

  </StrictMode>,
)
