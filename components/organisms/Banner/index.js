import styled from "styled-components";
import { AtomicImage } from "../../atoms/Image";

const StyledBanner = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const Banner = ({
  alt,
  sourceImage,
  width,
  height,
  objectFit = "cover",
  quality,
}) => {
  return (
    <StyledBanner width={width} height={height}>
      <AtomicImage
        src={sourceImage}
        quality={quality ? quality : 75}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
      />
    </StyledBanner>
  );
};
