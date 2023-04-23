import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import Registration from './component/login/Registration';
import Home from './component/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
