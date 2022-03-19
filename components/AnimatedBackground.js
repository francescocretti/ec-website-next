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
      className="w-full h-full"
      style={{
        ...animatedStyle,
        backgroundImage: `url(${src})`,
        backgroundSize: 'contain'
      }}
    >
      {children}
    </animated.div>
  );
};

export default AnimatedBackground;