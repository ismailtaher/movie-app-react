import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowSize: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const cleanUp = () => {
      console.log("useWindowSize Hook: Runs if a useEffect Dependancy chnages");
      window.removeEventListener("resize", handleResize);
    };
    return cleanUp;
  }, []);

  return windowSize;
};

export default useWindowSize;
