import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './dist/css/main.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
