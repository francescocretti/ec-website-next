import Image from 'next/image';
import { animated, useSpring } from 'react-spring';

const AnimatedBackground = ({
  children,
  src,
  blurDataURL,
  toggle,
  opacity
}) => {

  const animatedStyle = useSpring({
    config: {
      duration: 500
    },
    opacity: toggle ? (opacity || 1) : 0
  });

  return (
    <animated.div
      className="relative w-full h-full"
      style={animatedStyle}
    >
      <Image
        src={src}
        blurDataURL={blurDataURL}
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        priority
      />
      {children}
    </animated.div>
  );
};

export default AnimatedBackground;