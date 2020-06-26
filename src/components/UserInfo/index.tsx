import React from 'react';
import { FaHeadphones, FaMicrophone, FaCog } from 'react-icons/fa';

import { Container, Profile, Avatar, UserData, Icons } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4" alt="Leo Vargas"/>
        <UserData>
          <strong>Leo Vargas</strong>
          <span>#777</span>
        </UserData> 
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