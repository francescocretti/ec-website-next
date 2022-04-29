import React, { useEffect, useCallback, useRef, useState } from 'react';

import { animated, useSpring, config } from 'react-spring';

const ANIM_INTERVAL = 1800;

const ArrowPath = ({ color, toggle }) => {

  const [length, setLength] = useState(null);

  const animatedStyle = useSpring({
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length,
    config: {
      duration: 1000,
      ...config.slow
    },
  });

  return (
    <animated.path
      style={animatedStyle}
      ref={(ref) => {
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }}
      fill={'transparent'}
      stroke={color}
      strokeWidth={18}
      d="m 34.324626,396.56269 c -4.27899,-1.00807 -8.03502,-3.20713 -10.90632,-6.38531 -2.94177,-3.25622 -3.79867,-6.35207 -3.27284,-11.82444 0.67182,-6.99178 7.30646,-13.3024 14.93531,-14.20596 3.18755,-0.37745 4.35193,-0.14196 7.71828,1.56124 l 3.96443,2.00581 8.24076,-3.09701 c 10.31113,-3.87513 47.993164,-20.81324 96.240764,-43.26022 82.0369,-38.16742 127.44983,-58.58662 187.63636,-84.36778 70.81956,-30.33585 110.79366,-45.50825 162.90908,-61.8331 35.55644,-11.13784 122.82582,-34.93408 125.02327,-34.09082 0.81833,0.31402 1.16233,1.11222 1.01607,2.35762 -0.20116,1.71262 -2.35818,2.87958 -23.85752,12.90703 -13,6.06329 -39.83637,18.2379 -59.63637,27.05468 -19.8,8.81678 -51.54545,22.9611 -70.54545,31.43179 -19,8.47062 -61.05454,26.7912 -93.45454,40.71229 -88.37798,37.97273 -127.27122,55.33651 -203.63636,90.91265 -46.8004,21.80291 -58.87385,27.29346 -72.72727,33.07367 -33.895184,14.14248 -57.478304,19.91499 -69.647654,17.04786 z M 573.18441,347.41462 c -1.22298,-1.22291 -0.18785,-3.22408 3.33331,-6.44422 2.1,-1.92051 20.34546,-19.57236 40.54545,-39.22633 62.93877,-61.2376 83.98177,-81.1189 138.55277,-130.9039 68.9495,-62.90251 96.4919,-88.846993 109.5935,-103.235223 7.8219,-8.59012 13.6719,-16.4228 13.6719,-18.30575 0,-0.539 -1.3909,-1.40171 -3.0909,-1.91713 -4.119,-1.24881 -36.2712,-1.23115 -48.5455,0.0267 -51.8117,5.30947 -66.9418,7.19972 -131.9999,16.49114 -77.30717,11.04075 -99.74659,13.45414 -125.09554,13.45414 -19.748,0 -27.34167,-1.34581 -31.82516,-5.6403 -5.85367,-5.60682 -2.59665,-15.41741 5.82022,-17.5313 1.50524,-0.37805 10.75498,-0.87263 20.55498,-1.09908 33.74364,-0.77972 56.69149,-3.53298 134.1818,-16.09901 74.4848,-12.07865 105.582,-15.7887 141.0909,-16.83281 39.0539,-1.14834 57.7631,4.16016 64.4727,18.29341 4.8451,10.20561 1.7224,23.27935 -9.2065,38.54546 -14.2171,19.85928 -36.8239,41.198973 -109.448,103.313783 -69.9272,59.80818 -168.76414,138.56919 -205.04545,163.39625 -6.32807,4.33025 -6.74145,4.53338 -7.56058,3.71418 z"
    />
  )
};

const AnimatedArrow = ({ width, height }) => {

  const [toggleAnim, setToggleAnim] = useState(false);

  const backwardRef = useRef(null);

  const forwareRef = useRef(null);

  const launchAnimBackward = useCallback(() => {
    setToggleAnim(false);
    backwardRef.current = setTimeout(() => {
      launchAnimForward();
    }, ANIM_INTERVAL);
  }, []);

  const launchAnimForward = useCallback(() => {
    setToggleAnim(true);
    forwareRef.current = setTimeout(() => {
      launchAnimBackward();
    }, ANIM_INTERVAL);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      launchAnimForward();
    }, 800);

    return () => {
      clearTimeout(backwardRef.current)
      clearTimeout(forwareRef.current)
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "200"}
      height={height || "100"}
      viewBox="0 0 926 417"
      version="1.1"
    >
      <ArrowPath
        color={'#000'}
        toggle={toggleAnim}
      />
    </svg>
  );
};

export default AnimatedArrow