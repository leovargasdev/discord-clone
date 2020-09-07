import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Logo, Content, BoxLogin, BoxQRCode } from './styles';
import DiscordLogo from '../../assets/logo.svg';
import QRCode from '../../assets/QRCODE.svg';

const Login: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      localStorage.setItem(
        '@DiscordLeoVargas:user',
        JSON.stringify({ avatar, name }),
      );
      history.push('/');
    },
    [avatar, name, history],
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

              <Link to="/">
                Esqueceu sua senha? Qual senha? Aqui não precisa :)
              </Link>

              <button type="submit">Entrar</button>
            </form>
            <span>
              Precisando de uma conta? <a href="/">Registrar-se anonimamente</a>
            </span>
          </BoxLogin>
          <BoxQRCode>
            <img src={QRCode} alt="QR Code gerado" />
            <p>Não entrar com Código QR</p>
            <span>
              Não escaneie isto com nenhum app, pois isto não irá fazer o login
              imediatamente.
            </span>
          </BoxQRCode>
        </Content>
      </div>
    </Container>
  );
};

export default Login;
