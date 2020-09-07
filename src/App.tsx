import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';
import defaultTheme from './styles/theme';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
