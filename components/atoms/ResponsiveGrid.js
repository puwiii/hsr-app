import React from "react";
import styled from "styled-components";
import { Container } from "../../globalStyles";

const StyledResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ responsiveType, min, max }) =>
    `repeat(${responsiveType}, minmax(${min}, ${max}))`};
  gap: ${({ gap }) => gap};
`;

export const ResponsiveGrid = (props) => {
  return (
    <StyledResponsiveGrid
      responsiveType={props.responsiveType}
      min={props.min}
      max={props.max}
      gap={props.gap}
    >
      {props.children}
    </StyledResponsiveGrid>
  );
};
