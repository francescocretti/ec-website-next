import ImageEffect from 'react-image-effects';

import { animated, useSpring } from 'react-spring';

const AnimatedBackground = ({ src, toggle, opacity }) => {

  const animatedStyle = useSpring({
    config: {
      duration: 500
    },
    opacity: toggle ? (opacity || 1) : 0
  });

  return (
    <animated.div className="animateddiv" style={animatedStyle}>
      <ImageEffect
        url={src}
        effect="hallucination"
        width="100vw"
        height="100vh"
      />
    </animated.div>
  );
};

export default AnimatedBackground;