import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
  Container,
  Messages,
  Message,
  ContentMessage,
  HeaderMessage,
} from './styles';

import NewMessage from './NewMessage';
import api from '../../services/api';

interface IMessage {
  id: number;
  content: string;
  date: string;
  username: string;
  avatar_url: string;
  hasMention?: boolean;
}

interface ICreateMessageData {
  content: string;
  username: string;
  avatar_url: string;
}

interface IUser {
  name: string;
  avatar: string;
}

const ChannelMessages: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [user, setUser] = useState<IUser>({
    name: 'Anonimo',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT2KlUEHWKd413pq_-JQZilft0PBdE0DBz5A&usqp=CAU',
  });
  // Carrega as messegens do final
  useEffect(() => {
    const div = messagesRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef, messages]);

  useEffect(() => {
    async function loadMessages(): Promise<void> {
      const response = await api.get('/messages');
      setMessages(response.data);
    }

    const userLogin = localStorage.getItem('@DiscordLeoVargas:user');

    if (userLogin) setUser(JSON.parse(userLogin));

    loadMessages();
  }, []);

  const handleAddMessage = useCallback(
    async (newMessage: ICreateMessageData): Promise<void> => {
      try {
        const response = await api.post('/new-message', newMessage);
        setMessages([...messages, response.data]);
      } catch (err) {
        console.log(err);
      }
    },
    [messages],
  );

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
                alt={message.username}
                src={`${message.avatar_url}${message.id}`}
              />
              <ContentMessage>
                <HeaderMessage>
                  <strong>{message.username}</strong>
                  <span>{message.date}</span>
                </HeaderMessage>
                <p>{message.content}</p>
              </ContentMessage>
            </Message>
          ))}
      </Messages>
      <NewMessage handleAddMessage={handleAddMessage} user={user} />
    </Container>
  );
};

export default ChannelMessages;
