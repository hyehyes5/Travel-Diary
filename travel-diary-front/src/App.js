import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LoginPage from "./components/Login/LoginPage";
import MainPage from './components/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import GoogleButton from './components/Login/GoogleButton';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
    
  }
`;
function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Route path='/' component = { LoginPage } exact/>
      <Route exact path='/mainpage' component={ MainPage } />
      </BrowserRouter>
    </>
  );
}

export default App;
