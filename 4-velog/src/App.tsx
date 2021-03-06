import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import articleReducer from './articleReducer';
import HomePage from './pages/home';
import WritePage from './pages/write';
import Store from './store';
import './reset.css';
import ArticlePage from './pages/article';

function App() {
  const [state, contextDispatch] = useReducer(articleReducer, {});
  return (
    <Store.Provider value={{ article: state, contextDispatch }}>
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/write' component={WritePage} />
          <Route path='/articles/:id/edit'>
            <WritePage isEdit={true} />
          </Route>
          <Route path='/articles/:id' component={ArticlePage} />
          <Route path='/'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
