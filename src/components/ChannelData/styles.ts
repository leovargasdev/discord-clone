import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--primary);
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  max-height: calc(100vh - (46px + 68px));
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 4px;
  }
  ::-webkit-scrollbar-thumb{
    background: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track{
    background: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px 10px;
  background: var(--chat-input);
  border-radius: 7px;
  padding: 2px 0;

  input {
    flex: 1;
    height: 44px;
    font-size: 14px;
    background: transparent;
    color: #FFF;

    &::placeholder {
      color: var(--gray);
    }

  }
  svg {
    margin: 0 14px;
    height: 25px;
    width: 25px;
    color: var(--gray);

    &:hover{
      color: #FFF;
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
`;

