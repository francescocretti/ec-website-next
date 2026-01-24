import EcLogo from '../components/EcLogo';

import Container from '../components/Container';

import image from '../assets/home-min.png';

import SocialLinks from '../components/SocialLinks';

import Link from 'next/link';

import kingIsComing from '../assets/KingIsComing_FRONT.png';

import NewVideo from '../components/NewVideo';

const LOGO_SIZE = 150;

const Home = () => {
  return (
    <Container bgImage={image} >
      <div className='my-28 md:my-0 flex flex-col justify-center items-center w-full h-full'>

        <Link href="https://youtu.be/P510Nl_gXxA?si=iGeQW-BfrYa7xeuN">
          <a>
            <EcLogo
              className="cursor-pointer"
              width={LOGO_SIZE} height={LOGO_SIZE} color="#26161E"
            />
          </a>
        </Link>

        <h1 className='font-inknut font-bold text-3xl md:text-3xl text-ec-grayred-500 text-center mt-10'>
          Psychedelic grooves from the world
        </h1>

        <div className="mt-10">
          <SocialLinks />
        </div>

      </div>
    </Container>
  );
};

export default Home;