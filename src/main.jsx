import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollLinked from './components/ScrollLinked.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollLinked>
        <App />
      </ScrollLinked>
    </BrowserRouter>
  </StrictMode>,
)
