import React, { useRef, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';

import Message from './Message';
import { Container, Messages, InputWrapper } from './styles';

const ChannelMessages: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <Message>Um texto normal</Message>
        <Message>Um texto normal</Message>
        <Message hasMention>
          Um texto <span>@leo vargas</span> normal
        </Message>
        <Message>Um texto normal</Message>
        <Message>Um texto normal</Message>
        <Message>Um texto normal</Message>
        <Message>Um texto normal</Message>
      </Messages>
      <InputWrapper>
        <MdAddCircle />
        <input name="message-chat" placeholder="Digite sua mensagem aqui" />
      </InputWrapper>
    </Container>
  );
};

export default ChannelMessages;
