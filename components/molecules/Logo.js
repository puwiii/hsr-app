import { AtomicImage } from "../atoms/Image";
import styled from "styled-components";
import Link from "next/link";

const StyledLogo = styled(Link)`
  cursor: pointer;
`;

const StyledLogoLink = styled.a`
  position: relative;
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "150px")};
  user-select: none;
  margin: 15px 0;

  transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 425px) {
    height: 40px;
  }
`;

export const Logo = ({
  height = "60px",
  width = "150px",
  mediaSource = "/images/logo-small.png",
}) => {
  return (
    <StyledLogo href="/" passHref={true}>
      <StyledLogoLink height={height} width={width}>
        <AtomicImage
          // width={width}
          // height={height}
          src={mediaSource}
          layout="fill"
          objectFit="contain"
          quality={67}
          alt="Hospital Santa Rosa - Villaguay"
        />
      </StyledLogoLink>
    </StyledLogo>
  );
};
