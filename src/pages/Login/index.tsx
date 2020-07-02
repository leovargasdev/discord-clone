import React, { useState } from 'react';

import { Container, Logo, Content, BoxLogin, BoxQRCode } from './styles';
import DiscordLogo from '../../assets/logo.svg';
import QRCode from '../../assets/QRCODE.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Logo src={DiscordLogo} alt="Logo Discord" />
      <div>
        <Content>
          <BoxLogin>
            <h4>Boas-vindas de volta!</h4>
            <p>Estamos muito animados em te ver novamente!</p>

            <form>
              <label htmlFor="">E-MAIL</label>
              <input value={email} onChange={e => setEmail(e.target.value)} />

              <label htmlFor="">SENHA</label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
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
