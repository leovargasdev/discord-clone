import React, { useState, useCallback, FormEvent } from 'react';

import { Container, Logo, Content, BoxLogin, BoxQRCode } from './styles';
import DiscordLogo from '../../assets/logo.svg';
import QRCode from '../../assets/QRCODE.svg';

const Login: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      localStorage.setItem(
        '@DiscordLeoVargas:user',
        JSON.stringify({ avatar, name }),
      );
    },
    [avatar, name],
  );

  return (
    <Container>
      <Logo src={DiscordLogo} alt="Logo Discord" />
      <div>
        <Content>
          <BoxLogin>
            <h4>Boas-vindas de volta!</h4>
            <p>Estamos muito animados em te ver novamente!</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome</label>
              <input value={name} onChange={e => setName(e.target.value)} />

              <label htmlFor="avatar">Avatar URL</label>
              <input
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
                type="url"
              />

              <a href="/">Esqueceu sua senha?</a>

              <button type="submit">Entrar</button>
            </form>
            <span>
              Precisando de uma conta? <a href="/">Registrar-se</a>
            </span>
          </BoxLogin>
          <BoxQRCode>
            <img src={QRCode} alt="QR Code gerado" />
            <p>Entrar com Código QR</p>
            <span>
              Escaneie isto com o app móbel do Discord para fazer login
              imediatamente.
            </span>
          </BoxQRCode>
        </Content>
      </div>
    </Container>
  );
};

export default Login;
