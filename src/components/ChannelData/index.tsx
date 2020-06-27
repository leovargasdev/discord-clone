import React, { useRef, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';

import ChannelMessage from '../ChannelMessage';
import { Container, Messages, InputWrapper} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) div.scrollTop = div.scrollHeight;
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage hasMention>
          Um texto <span>@leo vargas</span> normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
        <ChannelMessage>
          Um texto normal
        </ChannelMessage>
      </Messages>

      <InputWrapper>
        <MdAddCircle />
        <input name="message-chat" placeholder="Digite sua mensagem aqui" />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;