import React, { useRef, useEffect } from "react";
import Lottie from "lottie-web";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const AnimationBox = ({ animationPath }) => {
  const lottieContainer = useRef(null);

  console.log(animationPath);

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../lottie/${animationPath}`),
    });
  }, []);

  return <Box ref={lottieContainer} />;
};
