import Github from '../../assets/icons/github.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Rocket from '../../assets/icons/rocket.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Spotify from '../../assets/icons/spotify.svg';

interface IServerProps {
  link: string;
  notification: boolean;
  mentions: number;
  image: string;
}

const servers: IServerProps[] = [
  {
    link: 'https://github.com/LeeonardoVargas',
    notification: true,
    mentions: 0,
    image: Github,
  },
  {
    link: 'https://instagram.com/leuvargas',
    notification: false,
    mentions: 0,
    image: Instagram,
  },
  {
    link: 'https://leonardovargas.me',
    notification: false,
    mentions: 0,
    image: Rocket,
  },
  {
    link: 'https://www.linkedin.com/in/leonardo-luis-de-vargas/',
    notification: false,
    mentions: 10,
    image: Linkedin,
  },
  {
    link: 'https://open.spotify.com/user/leo_vargas',
    notification: false,
    mentions: 0,
    image: Spotify,
  },
];

export default servers;
