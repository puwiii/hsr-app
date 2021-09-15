import Link from "next/link";
import styled from "styled-components";

const AnchorLink = styled.a`
  color: ${({ theme }) => theme.color_text_400 + "99"};
  font-weight: 600;
  border: 0;
  border-bottom: 3px solid transparent;

  font-size: 0.9rem;

  padding: 10px 15px;

  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;

  transition: color 105ms linear, border-color 105ms linear;

  &:hover {
    color: ${({ theme }) => theme.color_secondary_500};
    //border-color: ${({ theme }) => theme.color_secondary_400};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border-bottom: 0;
    border-top: 3px solid transparent;
  }
`;

const AnchorIcon = styled.span`
  font-size: ${({ theme }) => theme.font_medium};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_medium};
  }
`;
const AnchorLabel = styled.span`
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_small};
  }
`;

export const AtomicNavLink = ({
  href = "#",
  passHref = true,
  label = "",
  icon,
}) => {
  return (
    <Link href={href} passHref={passHref}>
      <AnchorLink>
        <AnchorIcon>{icon}</AnchorIcon>
        <AnchorLabel>{label}</AnchorLabel>
      </AnchorLink>
    </Link>
  );
};
