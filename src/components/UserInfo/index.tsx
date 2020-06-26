import React from 'react';
import { FaHeadphones, FaMicrophone, FaCog } from 'react-icons/fa';

import { Container, Profile, Avatar, UserData, Icons } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData /> 
      </Profile>

      <Icons>
        <FaHeadphones />
        <FaMicrophone />
        <FaCog />
      </Icons>
    </Container>
  );
}

export default UserInfo;