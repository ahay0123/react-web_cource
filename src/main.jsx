import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './dist/css/main.css'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from "./component/ScrollToTop.jsx";
import 'animate.css';
import { BrowserRouter } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
