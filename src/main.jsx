import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'

import theme from './Styles/theme'

import { AuthProvider } from './hook/auth'

import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <AuthProvider>
          <Routes />
       </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
