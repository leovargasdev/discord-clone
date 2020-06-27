import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

interface IMessage {
  // author: string;
  // data: string;
  // content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  // isBot ?: boolean;
}

const ChannelMessage: React.FC<IMessage> = ({hasMention, children}) => {
  const isBot = false;
  return (
    <Container hasMention={!!hasMention}>
      <Avatar alt="Fulano" src="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4" />
      <Message>
        <Header>
          <strong>Fulano</strong>
          {isBot && <span>BOT</span>}

          <time>20/06/2020</time>
        </Header>
        <Content>{children}</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;