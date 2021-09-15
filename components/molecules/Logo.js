import { AtomicImage } from "../atoms/Image";
import styled from "styled-components";
import Link from "next/link";

const StyledLogo = styled(Link)`
  cursor: pointer;
`;

const StyledLogoLink = styled.a`
  position: relative;
  height: 50px;
  width: 150px;
  user-select: none;
  margin: 15px 0;

  transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
  }
`;

export const Logo = () => {
  return (
    <StyledLogo href="/" passHref>
      <StyledLogoLink>
        <AtomicImage
          src="/images/logo-icon.png"
          layout="fill"
          objectFit="contain"
          quality={100}
          alt="Hospital Santa Rosa - Villaguay"
        />
      </StyledLogoLink>
    </StyledLogo>
  );
};
