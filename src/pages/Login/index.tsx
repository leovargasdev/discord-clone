import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Logo,
  Content,
  BoxLogin,
  BoxQRCode,
  BoxAvatarUser,
} from './styles';
import DiscordLogo from '../../assets/logo.svg';
import QRCode from '../../assets/QRCODE.svg';

const Login: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  const handleLogin = useCallback((): void => {
    if (avatar && name) {
      localStorage.setItem(
        '@DiscordLeoVargas:user',
        JSON.stringify({ avatar_url: avatar, name }),
      );
      history.push('/');
    }
  }, [history, avatar, name]);

  return (
    <Container>
      <Logo src={DiscordLogo} alt="Logo Discord" />
      <div>
        <Content>
          <BoxLogin>
            <h4>Boas-vindas de volta!</h4>
            <p>Estamos muito animados em te ver novamente!</p>

            <form>
              <label htmlFor="name">Nome</label>
              <input value={name} onChange={e => setName(e.target.value)} />

              <label htmlFor="avatar">URL do Avatar</label>
              <input
                value={avatar}
                onChange={e => setAvatar(e.target.value)}
                type="url"
              />

              <Link to="/">
                Esqueceu sua senha? Qual senha? Aqui não precisa :)
              </Link>

              <button type="button" onClick={handleLogin}>
                Entrar
              </button>
            </form>
            <span>
              Precisando de uma conta?{' '}
              <Link to="/">Registrar-se anonimamente.</Link>
            </span>
          </BoxLogin>
          {avatar ? (
            <BoxAvatarUser
              alt="Teste do carregamento da url avatar do usuário"
              src={avatar}
            />
          ) : (
            <BoxQRCode>
              <img src={QRCode} alt="QRCode gerado" />
              <p>Não entrar com Código QR</p>
              <span>
                Não escaneie isto com nenhum app, pois isto não irá fazer o
                login imediatamente.
              </span>
            </BoxQRCode>
          )}
        </Content>
      </div>
    </Container>
  );
};

export default Login;
