import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalStyle from './Style/StyleGlobal.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <GlobalStyle/>
      <App/>
    
  </StrictMode>
)
