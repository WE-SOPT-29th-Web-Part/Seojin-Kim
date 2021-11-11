import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import PreviewPage from './pages/preview';
import WritePage from './pages/write';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/write' component={WritePage} />
        <Route path='/preview' component={PreviewPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
