import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './styles/global'

// Arquivo de Inicialização da aplicação
function App() {
  return (
    <Router>
      <Routes />

      <GlobalStyle />
    </Router>
  )
}

export default App
