import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from 'reportWebVitals'

import Amplify, { I18n } from 'aws-amplify'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import awsconfig from 'aws-exports'
// import translations from 'translations'

import { RootStore, StoreProvider } from 'stores/RootStore'
import App from 'components/App'
import theme from 'theme'

Amplify.configure(awsconfig)
// I18n.putVocabulariesForLanguage('es', translations)
I18n.setLanguage('es')

const store = new RootStore()

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <CssBaseline />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()