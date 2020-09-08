import React, { useCallback, useState, FormEvent } from 'react';
import { MdAddCircle } from 'react-icons/md';

import { InputWrapper } from './styles';

interface INewMessageProps {
  handleNewMessage: (message: string) => void;
}

interface IUser {
  name: string;
  avatar: string;
}

const NewMessage: React.FC<INewMessageProps> = ({ handleNewMessage }) => {
  const [textMessage, setTextMessage] = useState('');
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      handleNewMessage(textMessage);
      setTextMessage('');
    },
    [textMessage, handleNewMessage],
  );

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <MdAddCircle size={20} />
        <input
          value={textMessage}
          onChange={e => setTextMessage(e.target.value)}
          placeholder="Deixe sua mensagem aqui"
        />
      </InputWrapper>
    </form>
  );
};

export default NewMessage;
