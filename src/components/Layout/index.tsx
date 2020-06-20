import React from 'react';

import { Grind } from './styles';
import ServerList from '../ServerList/';
const Layout: React.FC = () => {
  return (
    <Grind>
      <ServerList />
    </Grind>
  );
}

export default Layout;