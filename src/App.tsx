import React from 'react';
import Routes from './routes';
import "./App.css"
import Header from './templates/header';
import { BrowserRouter } from 'react-router-dom';
import GoogleAuthProvider from './context/googleAuthContext';

function App() {
  return (
    <GoogleAuthProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </GoogleAuthProvider>
  );
}

export default App;