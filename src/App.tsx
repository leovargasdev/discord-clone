import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/server" exact component={Layout} />
    </Switch>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
