import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css';
import Store from './ReduxState/Store.js';
import App from './App.jsx'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store} >
      <App />
    </Provider>
    
  </StrictMode>,
)
