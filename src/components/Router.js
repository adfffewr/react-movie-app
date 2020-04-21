// Router.js

import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Search, Detail } from '../routes';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
