import React, { useCallback, useState, FormEvent } from 'react';
import { MdAddCircle } from 'react-icons/md';

import { InputWrapper } from './styles';

interface ICreateMessageData {
  content: string;
  username: string;
  avatar_url: string;
}

interface INewMessageProps {
  handleAddMessage: (message: ICreateMessageData) => void;
  user: IUser;
}

interface IUser {
  name: string;
  avatar: string;
}

const NewMessage: React.FC<INewMessageProps> = ({ handleAddMessage, user }) => {
  const [newMessage, setNewMessage] = useState('');
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const message = {
        content: newMessage,
        username: user.name,
        avatar_url: user.avatar,
      };
      handleAddMessage(message);
      setNewMessage('');
    },
    [newMessage, handleAddMessage, user],
  );

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <MdAddCircle size={20} />
        <input
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Deixe sua mensagem aqui"
        />
      </InputWrapper>
    </form>
  );
};

export default NewMessage;
