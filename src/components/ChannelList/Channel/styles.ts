import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;
  transition: background 0.2s;

  div {
    display: flex;
    align-items: center;
    /* Oculta os ícones */
    & + div {
      visibility: hidden;
    }
    span {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.senary};
      margin-left: 5px;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--symbol);
  }

  &:hover,
  &.active {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.quinary};

    div {
      span,
      svg {
        color: #fff;
      }
      & + div {
        /* Mostra os icones de add usuário e ajustes do canal */
        visibility: visible;
      }
    }
  }
`;

export const ChannelSettings = styled.div`
  svg {
    width: 16px;
    height: 16px;
    color: var(--symbol);

    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: #fff;
    }

    & + svg {
      margin-left: 5px;
    }
  }
`;
