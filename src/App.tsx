import React from 'react';
import { Header } from './containers/header/Header';
import './app.scss';
import { Main } from './containers/main/Main';
import { Menu } from './containers/menu/Menu';
import { Content } from './containers/content/Content';

function App() {
  return (
    <div className="App">
      <Main />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
