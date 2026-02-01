import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // <--- LOS ESTILOS SIEMPRE PRIMERO
import App from './App' // <--- Quita el .tsx, Vite lo detecta solo

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)