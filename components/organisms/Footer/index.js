import React from "react";
import styled from "styled-components";
import { ResponsiveFlexbox } from "../../atoms/ResponsiveFlexbox";
import { Logo } from "../../molecules/Logo";
import { Container } from "../../../globalStyles";
import { LinksBox } from "../../molecules/LinksBox";

import { footerData } from "./footer.data";

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 80px 0 100px 0;
  background: ${({ theme }) => theme.color_background_300};
  //color: ${({ theme }) => theme.color_background_400} !important;
  box-shadow: 0px -0px 30px ${({ theme }) => theme.color_text_400 + "11"};
`;

const StyledContainer = styled(Container)`
  /* display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`}; */

  display: flex;
  align-items: flex-start;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: flex;
`;

const Index = () => {
  return (
    <StyledFooter>
      <StyledContainer cols={footerData.length + 1}>
        <ResponsiveFlexbox direction="column" gap="20px">
          <Logo
            width="200px"
            height="80px"
            mediaSource="/images/logo-small.png"
          />
        </ResponsiveFlexbox>
        {footerData.map((item, index) => (
          <LinksBox
            links={item.links}
            title={item.title}
            icon={item.icon}
            direction="column"
            key={index}
          />
        ))}
      </StyledContainer>
    </StyledFooter>
  );
};

export default Index;
