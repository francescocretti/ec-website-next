import { useCallback, useEffect, useRef, useState } from "react";

import Bowser from "bowser";

/*
 * Exploits the useEffect hook to define a custom hook that
 * executes a function only once, after the initIal render!
 */
export const useMountEffect = funct => useEffect(funct, []);

/*
 * Keeps the previous value of a state. Usage example:
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * console.log(`Now: ${count}, before: ${prevCount}`);
 */
export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => (ref.current = value), [value]);
  return ref.current;
};

export const useQueryParams = () => new URLSearchParams(window.location.search);

/**
 * useState and useRef combined together, to update state and re-render component, but use always the last updated value
 * @link https://github.com/Aminadav/react-useStateRef#readme
 */
export const useStateRef = defaultValue => {
  const [state, setState] = useState(defaultValue);
  const ref = useRef(defaultValue);
  ref.current = state;
  return [
    state,
    newValue => {
      ref.current = newValue;
      return setState(newValue);
    },
    ref
  ];
};

// returns a function that when called will
// return `true` if the component is mounted
export const useMountedState = () => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};

export const useDeviceInfo = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return {
    platform: browser.getPlatformType(),
    os: browser.getOSName(),
    browser: browser.getBrowserName(),
    browserVersion: browser.getBrowserVersion(),
    device: browser.getResult()
  };
};

export const useWindowDimensions = () => {

  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {

    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export const useElementDimensions = (elementRef) => {

  if (!elementRef) {
    console.warn('useElementDimensions needs an elementRef');
    return;
  }

  const [elementDimensions, setElementDimensions] = useState({
    width: undefined,
    height: undefined,
  });


  const handleResize = useCallback(() => {
    setElementDimensions({
      width: elementRef.current.clientWidth,
      height: elementRef.current.clientHeight
    });
  }, [elementRef]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return elementDimensions;
};

export const useElementWidth = (elementRef) => {

  if (!elementRef) {
    console.warn('useElementWidth needs an elementRef');
    return;
  }

  const [elementWidth, setElementWidth] = useState(null);

  const handleResize = useCallback(() => {
    setElementWidth(elementRef.current.clientWidth);
  }, [elementRef]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return elementWidth;
};

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

export const useIsVisible = (elementRef) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(elementRef.current);
          }
        });
      }, OPTIONS);

      observer.observe(elementRef.current);
    }
  }, [elementRef]);

  return isVisible;
};
