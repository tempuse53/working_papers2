import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./home";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="" element={<App />} />
          <Route exact path="/About" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();






// Sources: https://isotropic.co/react-multiple-pages/