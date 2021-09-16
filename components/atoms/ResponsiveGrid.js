import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyles";

const StyledResponsiveGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ responsiveType, min, max }) =>
    `repeat(${responsiveType}, minmax(${min}, ${max}))`};
  gap: ${({ gap }) => gap};
  justify-content: center;
  @media screen and (max-width: 425px) {
    grid-template-columns: ${({ responsiveType, minMobile, maxMobile }) =>
      `repeat(${responsiveType}, minmax(${minMobile}, ${maxMobile}))`};

    gap: 5px;
  }
`;

export const ResponsiveGrid = (props) => {
  return (
    <StyledResponsiveGrid
      responsiveType={props.responsiveType}
      min={props.min}
      max={props.max}
      gap={props.gap}
      minMobile={props.minMobile}
      maxMobile={props.maxMobile}
    >
      {props.children}
    </StyledResponsiveGrid>
  );
};
