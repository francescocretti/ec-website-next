import Image from 'next/image';
import { animated, useSpring } from 'react-spring';

const AnimatedBackground = ({
  children,
  src,
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
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      {children}
    </animated.div>
  );
};

export default AnimatedBackground;