import React from 'react';
import Routes from './routes';
import "./App.css"
import Header from './templates/header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;