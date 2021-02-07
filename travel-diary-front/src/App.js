import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LoginPage from "./components/Login/LoginPage";
import MainPage from './components/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    font-family : 'Roboto', 'Noto Sans KR';
    
  }
`;
function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Route path='/' component = { LoginPage } exact/>
      <Route exact path='/main' component={ MainPage } />
      </BrowserRouter>
    </>
  );
}

export default App;
