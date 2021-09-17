import React from "react";
import styled from "styled-components";
import { AtomicImage } from "./Image";

const StyledImageBox = styled.div`
  display: block;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ImageBox = ({
  sourceImage,
  width,
  height,
  quality = 75,
  layout = "fill",
  alt = "",
  objectFit = "contain",
}) => {
  return (
    <StyledImageBox width={width} height={height}>
      <AtomicImage
        src={sourceImage}
        layout={layout}
        quality={quality}
        alt={alt}
        objectFit={objectFit}
      />
    </StyledImageBox>
  );
};
