import styled from 'styled-components';

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
    color: #fff;

    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin: 0 14px;
    height: 25px;
    width: 25px;
    color: var(--gray);

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
`;
