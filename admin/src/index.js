import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';
import axios from "axios";

axios.defaults.baseURL = "https://booking-app-ig6s.onrender.com/api"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <DarkModeContextProvider>
    <App/>
    </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
