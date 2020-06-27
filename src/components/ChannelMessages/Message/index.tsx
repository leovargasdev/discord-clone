import React from 'react';

import { Container, Header, Content } from './styles';

interface IMessage {
  user: {
    name: string;
    url_avatar: string;
  };
  hasMention?: boolean;
  date: Date;
  text: string;
}

const Message: React.FC<IMessage> = ({
  date,
  user,
  hasMention = false,
  children,
}) => {
  return (
    <Container hasMention={!!hasMention}>
      <img alt={user.name} src={user.url_avatar} />
      <Content>
        <Header>
          <strong>{user.name}</strong>
          <time>{date}</time>
        </Header>
        <p>{children}</p>
      </Content>
    </Container>
  );
};

export default Message;
