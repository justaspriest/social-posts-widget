import { useEffect, useRef } from "react";

export type VoidFunction = () => void;

const useInterval = (callback: VoidFunction, delay: number, preFire: boolean) => {
  const callbackRef = useRef<VoidFunction>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (callbackRef.current != null) {
        callbackRef.current();
      }
    };
    if (preFire) {
      tick();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
