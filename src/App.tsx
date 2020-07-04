import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/login" exact component={Login} />
    </Switch>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
