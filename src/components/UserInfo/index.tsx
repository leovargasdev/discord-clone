import React, { useEffect, useState } from 'react';
import { FaHeadphones, FaMicrophone, FaCog } from 'react-icons/fa';

import { Container, User, UserAvatar, UserData, Icons } from './styles';

interface IUserProps {
  name: string;
  avatar_url: string;
}

const UserInfo: React.FC = () => {
  const [user, setUser] = useState({} as IUserProps);

  useEffect(() => {
    const userLogin = localStorage.getItem('@DiscordLeoVargas:user');

    if (userLogin) setUser(JSON.parse(userLogin));
  }, []);

  return (
    <Container>
      {user.name && (
        <User>
          <UserAvatar
            src={user.avatar_url}
            alt={`Avatar do usuário ${user.name}`}
          />
          <UserData>
            <strong>{user.name}</strong>
            <span>#0800</span>
          </UserData>
        </User>
      )}

      <Icons>
        <FaHeadphones />
        <FaMicrophone />
        <FaCog />
      </Icons>
    </Container>
  );
};

export default UserInfo;
