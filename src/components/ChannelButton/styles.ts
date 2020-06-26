import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;
  transition: background .2s;

  div {
    display: flex;
    align-items: center;
    /*oculta os icones da direita*/
    & + div {
      visibility: hidden;
    }
    span {
      font-size: 15px;
      color: var(--senary);
      margin-left: 5px;
    } 
  }

  &:hover {
    cursor: pointer;
    background: var(--quinary);

    div {
      span {
        color: #FFF;
      }
      & + div { /*mostra os icones de add usuário e ajustes do canal*/
        visibility: visible;
      }
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: var(--symbol);
  }
`;

export const ChannelSettings = styled.div`
  svg {
    width: 16px;
    height: 16px;
    color: var(--symbol);
    
    transition: color .2s;

    &:hover {
      cursor: pointer;
      color: #FFF;
    }
  
    & + svg {
      margin-left: 5px;
    }
  }
`;