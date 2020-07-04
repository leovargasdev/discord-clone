import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface IUserProps {
  avatar_url: string;
  name: string;
  isBot?: boolean;
}

const UserRow: React.FC<IUserProps> = ({ name, avatar_url, isBot }) => (
  <User>
    <Avatar src={avatar_url} alt={name} />

    <strong>{name}</strong>

    {isBot && <span>BOT</span>}
  </User>
);

const UserList: React.FC = () => (
  <Container>
    <Role>Disponível - 1</Role>
    <UserRow
      name="Eu"
      avatar_url="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4"
    />

    <Role>Offline - 1</Role>
    <UserRow
      name="Ro"
      avatar_url="https://pipocamoderna.com.br/wp-content/uploads/2016/09/alpha-5-power-rangers.jpg"
      isBot
    />
  </Container>
);

export default UserList;
