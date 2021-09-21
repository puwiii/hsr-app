import React from "react";
import styled from "styled-components";
import { AtomicImage } from "./Image";

const StyledImageBox = styled.div`
  display: block;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  clip-path: ${({ circleClip }) => circleClip && "circle()"};
`;

const myLoader = ({ src, width, quality }) => {
  return `http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg?w=${width}&q=${
    quality || 75
  }`;
};

export const ImageBox = ({
  sourceImage,
  width,
  height,
  quality = 75,
  layout = "fill",
  alt = "",
  objectFit = "contain",
  circleClip = false,
}) => {
  return (
    <StyledImageBox width={width} height={height} circleClip={circleClip}>
      <AtomicImage
        src={sourceImage}
        layout={layout}
        quality={quality}
        alt={alt}
        objectFit={objectFit}
        placeholder="blur"
        blurDataURL={sourceImage}
      />
    </StyledImageBox>
  );
};
