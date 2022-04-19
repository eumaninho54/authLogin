import React from 'react';
import Routes from './routes';
import "./App.css"
import Header from './templates/header';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;