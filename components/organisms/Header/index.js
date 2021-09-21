import React, { useEffect, useState } from "react";

//molecules
import { NavMenu } from "../../molecules/NavMenu";
import { Logo } from "../../molecules/Logo";

//data
import { links } from "./Data";

//styled
import styled from "styled-components";
import { Container } from "../../../globalStyles";

//imports end-----

const StyledHeader = styled.header`
  display: grid;
  place-items: center;
  position: ${({ colored, theme }) => (colored ? "fixed" : "fixed")};

  top: 0;
  z-index: 10;
  width: 100%;
  transition: background-color 0.2s linear, padding 0.3s ease-in-out,
    box-shadow 0.2s linear;

  background-color: ${({ colored, theme }) => colored && "#fff"};
  box-shadow: ${({ colored, theme }) =>
    colored && `0 0 50px ${theme.color_text_400}1f`};
  border-bottom: ${({ colored, theme }) =>
    colored && `1px solid ${theme.color_text_400}11`};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`;

const Header = () => {
  const [coloredHeader, setColoredHeader] = useState(false);

  useEffect(() => {
    handleHeaderColor();
    document.addEventListener("scroll", handleHeaderColor);
  }, []);

  const handleHeaderColor = () => {
    if (window.scrollY > 100) {
      setColoredHeader(true);
    } else {
      setColoredHeader(false);
    }
  };

  return (
    <StyledHeader colored={coloredHeader}>
      <HeaderContainer>
        <Logo />
        <NavMenu links={links} />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
