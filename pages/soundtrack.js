import { useState } from 'react';

import Container from '../components/Container';

import { useMountEffect } from '../hooks/toolkit';

import image from '../assets/soundtrack-min.png';
import SpotifyPlayer from '../components/SpotifyPlayer';

const Music = () => {
  return (
    <Container bgImage={image}
      title="MUSIC FOR IMAGES"
      subtitle="Soundtracks are kind of a natural consequence <br /> for the musical environments we design 🎥"
    >

      {/* <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLvhHQ2aO5FxEbo6ekUzZ8ywgz1Z52RU1c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
      </div>

      <SpotifyPlayer
        link="https://open.spotify.com/track/1P7v0HvyIC7VmQRAqHmoID?si=2ace308e1e1a4635"
      /> */}
    </Container>
  );
};

export default Music;