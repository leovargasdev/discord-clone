import React, { useState, useCallback } from 'react';
import { FaHeadphones, FaMicrophone, FaCog } from 'react-icons/fa';

import { Container, User, UserAvatar, UserData, Icons } from './styles';

interface IUserProps {
  name: string;
  avatar_url: string;
}

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<IUserProps>(() => {
    const userLogin = localStorage.getItem('@DiscordLeoVargas:user');
    if (userLogin) return { ...JSON.parse(userLogin) };

    return {} as IUserProps;
  });

  // Caso tenha erro ao carregar a mensagem, é colocado um avatar aleatório
  const handleNewAvatarUser = useCallback(() => {
    const newAvatar = `https://api.adorable.io/avatars/80/${user.name}.png`;
    setUser({ name: user.name, avatar_url: newAvatar });
    localStorage.setItem(
      '@DiscordLeoVargas:user',
      JSON.stringify({
        name: user.name,
        avatar_url: newAvatar,
      }),
    );
  }, [user]);

  return (
    <Container>
      {user.name && (
        <User>
          <UserAvatar
            onError={() => handleNewAvatarUser()}
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
