import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.font_regular};
  /* color: ${({ theme }) => theme.color_text_400}; */
  transition: color 125ms linear;
  padding: 0.2em;
  &:hover {
    color: ${({ theme }) => theme.color_secondary_300};
  }
  display: flex;
  gap: 15px;
  align-items: center;

  & > svg {
    font-size: ${({ theme }) => theme.font_medium};
  }
`;

export const AnchorLink = ({ href, passHref = true, children }) => {
  return (
    <Link href={href} passHref={passHref}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
