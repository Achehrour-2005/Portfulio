import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Portfulio">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
