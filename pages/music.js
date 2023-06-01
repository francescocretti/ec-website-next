import { FaSpotify, FaBandcamp } from "react-icons/fa";

import Container from '../components/Container';

import image from '../assets/music-min.png';

import SpotifyPlayer from '../components/SpotifyPlayer';

import DiscoLink from '../components/DiscoLink';

const Music = () => {
  return (
    <Container
      bgImage={image}
      title="MUSIC"
      subtitle={`It's basically <strong>funk</strong>, with a sprinkle of <strong>world music</strong>, <strong>afrobeat</strong> and <strong>psychedelia</strong> 🍄`}
    >

      <div className='mt-16 flex flex-col xl:flex-row'>

        <div className='pb-20 xl:pb-0 xl:mr-20 xl:pr-20 xl:border-r border-ec-grayred-100'>
          <h4 className='text-ec-grayred text-xl font-medium mb-8 uppercase'>
            Enough talking, let&apos;s play some tunes!
          </h4>
          <SpotifyPlayer
            link="https://open.spotify.com/artist/1U6ZJR2dru7HSglnG1MPn6?si=sC0ybsxVQe64ojc0_6tpYw"
            width={350}
            height={400}
            style={{
              boxShadow: '10px 10px #C5AC86, -10px -10px #c0b7bc'
            }}
          />
        </div>

        <div className='flex flex-col'>

          <h4 className='text-ec-grayred text-xl font-medium mb-8 uppercase'>
            Or, check out our discography on...
          </h4>

          <DiscoLink href="https://spoti.fi/2zwMTOP" border>
            <FaSpotify /> <span className='ml-3'>Spotify</span>
          </DiscoLink>

          <DiscoLink href="https://electriccircus3.bandcamp.com/">
            <FaBandcamp /> <span className='ml-3'>Bandcamp</span>
          </DiscoLink>

        </div>
      </div>

    </Container>
  );
};

export default Music;