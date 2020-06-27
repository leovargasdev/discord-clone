import React, { useRef, useEffect, useState, useCallback } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import InputMessage from './Input';
import {
  Container,
  Messages,
  Message,
  ContentMessage,
  HeaderMessage,
} from './styles';

interface IMessage {
  id: number;
  user: {
    name: string;
    url_avatar: string;
  };
  date: string;
  text: string;
  hasMention?: boolean;
}

interface IFormMessageData {
  text: string;
}

const ChannelMessages: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const div = messagesRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef]);

  useEffect(() => {
    // api.get('messages')
    setMessages([
      {
        id: 0,
        user: {
          name: 'Marisa',
          url_avatar: 'https://api.adorable.io/avatars/',
        },
        date: new Date(2020, 5, 20).toDateString(),
        text: 'jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle',
      },
      {
        id: 1,
        user: {
          name: 'Giovanna',
          url_avatar: 'https://api.adorable.io/avatars/',
        },
        date: new Date(2020, 5, 20).toDateString(),
        text:
          'A prática cotidiana prova que a expansão dos mercados mundiais garante a contribuição de um grupo importante na determinação dos relacionamentos verticais entre as hierarquias.',
      },
      {
        id: 2,
        user: {
          name: 'Miguel',
          url_avatar: 'https://api.adorable.io/avatars/',
        },
        date: new Date(2020, 6, 10).toDateString(),
        hasMention: true,
        text:
          'Gostaria de enfatizar que a contínua expansão de nossa atividade aponta para a melhoria do processo de comunicação como um todo.',
      },
      {
        id: 3,
        user: {
          name: 'Lara_Cardoso',
          url_avatar: 'https://api.adorable.io/avatars/',
        },
        date: new Date(2020, 6, 16).toDateString(),
        text:
          'Pensando mais a longo prazo, a execução dos pontos do programa acarreta um processo de reformulação e modernização do investimento em reciclagem técnica.',
      },
    ]);
  }, []);

  const handleSubmit = useCallback(async (data: IFormMessageData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <Message hasMention>
          <img
            alt="Mestre Leo Vargas"
            src="https://avatars3.githubusercontent.com/u/11177716?s=460&u=c9e54ca2ea76850493ae4b9c34e029ec2e613199&v=4"
          />
          <ContentMessage>
            <HeaderMessage>
              <strong>Leo</strong>
              <span>Inicio dos tempo</span>
            </HeaderMessage>
            <p>
              Teste de Menções: As pessoas de sexo <span>@masculino</span> no
              inglês mens são!
            </p>
          </ContentMessage>
        </Message>
        {messages &&
          messages.map(message => (
            <Message key={message.id} hasMention={!!message.hasMention}>
              <img
                alt={message.user.name}
                src={`${message.user.url_avatar}${message.id}`}
              />
              <ContentMessage>
                <HeaderMessage>
                  <strong>{message.user.name}</strong>
                  <span>{message.date}</span>
                </HeaderMessage>
                <p>{message.text}</p>
              </ContentMessage>
            </Message>
          ))}
      </Messages>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputMessage
          name="message-chat"
          icon={MdAddCircle}
          type="text"
          placeholder="Deixe sua mensagem aqui"
        />
      </Form>
    </Container>
  );
};

export default ChannelMessages;
