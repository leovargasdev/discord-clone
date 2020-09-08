import React, { useEffect, useState } from 'react';

import { Container, Role, User, Avatar } from './styles';
import users, { IUserProps } from './content';

const UserList: React.FC = () => {
  const [user, setUser] = useState({} as IUserProps);

  useEffect(() => {
    const userLogin = localStorage.getItem('@DiscordLeoVargas:user');

    if (userLogin) setUser(JSON.parse(userLogin));
  }, []);

  return (
    <Container>
      <Role>mod criador - 1</Role>
      <User>
        <Avatar
          src="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4"
          alt="Grande Mestre"
        />
        <strong>Grande Mestre</strong>
      </User>

      <Role>Disponível - 1</Role>
      <User>
        <Avatar src={user.avatar_url} alt="Avatar do usuário logado" />
        <strong>{user.name}</strong>
      </User>

      <Role>Offline - {users.length}</Role>
      {users.map((item, index) => (
        <User key={index.toString()}>
          <Avatar src={item.avatar_url} alt={item.name} />
          <strong>{item.name}</strong>
          {item.isBot && <span>BOT</span>}
        </User>
      ))}
    </Container>
  );
};

export default UserList;
