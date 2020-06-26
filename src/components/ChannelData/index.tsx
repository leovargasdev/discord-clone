import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Container, Messages, InputWrapper} from './styles';

const ChannelData: React.FC = () => (
  <Container>
    <Messages>

    </Messages>

    <InputWrapper>
      <MdAddCircle />
      <input name="message-chat" placeholder="Digite sua mensagem aqui" />
    </InputWrapper>
  </Container>
);

export default ChannelData;