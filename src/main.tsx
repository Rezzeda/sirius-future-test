import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './styles/reset.scss'
import './index.scss'
import { Provider } from'react-redux'
import { store } from './services/store.ts'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
