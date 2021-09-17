import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { ImageBox } from "../../atoms/ImageBox";
import InfoSection from "../InfoSection";
import { AtomicImage } from "../../atoms/Image";

const StyledBanner = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  background: ${({ theme }) => theme.color_background_500};
`;

const BannerMedia = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BannerContainer = styled(Container)`
  width: 100%;
  max-width: 1440px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const Banner = ({
  alt,
  mediaSource,
  width,
  height,
  objectFit = "cover",
  quality,
  withoutText = false,
  title,
  subtitle,
  description,
  aspectRatio,
}) => {
  return (
    <StyledBanner width={width} height={height}>
      <AtomicImage
        src={mediaSource}
        width={aspectRatio}
        height={1}
        layout="responsive"
        objectFit={objectFit}
        quality={quality}
      />
      <BannerMedia></BannerMedia>

      {title && (
        <BannerContainer>
          <InfoSection
            title={title}
            subtitle={subtitle}
            description={description}
            mediaType={-1}
          />
        </BannerContainer>
      )}
    </StyledBanner>
  );
};

export default Banner;
