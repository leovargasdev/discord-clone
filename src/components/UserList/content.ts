import Bilu from '../../assets/avatars/bilu.jpg';
import Faustao from '../../assets/avatars/faustao.jpg';
import Miranha from '../../assets/avatars/miranha.jpg';
import Cage from '../../assets/avatars/cage.jpg';
import Silvio from '../../assets/avatars/silvio.jpg';
import Elon from '../../assets/avatars/elon.jpg';
import Uno from '../../assets/avatars/uno.png';

export interface IUserProps {
  name: string;
  avatar_url: string;
  isBot: boolean;
}

const users: IUserProps[] = [
  {
    name: 'Fausto Silva',
    avatar_url: Faustao,
    isBot: false,
  },
  {
    name: 'Miranha',
    avatar_url: Miranha,
    isBot: false,
  },
  {
    name: 'Silvio Santos',
    avatar_url: Silvio,
    isBot: false,
  },
  {
    name: 'Et Bilu',
    avatar_url: Bilu,
    isBot: true,
  },
  {
    name: 'Nicolas Cage',
    avatar_url: Cage,
    isBot: false,
  },
  {
    name: 'Elon Musk',
    avatar_url: Elon,
    isBot: false,
  },
  {
    name: 'Uno de Firma',
    avatar_url: Uno,
    isBot: true,
  },
];

export default users;
