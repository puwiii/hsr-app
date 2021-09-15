import React from "react";
import styled from "styled-components";
import { Pharagraph } from "../atoms/Pharagraph";
import { Subtitle } from "../atoms/Subtitle";

const StyledItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 40px;
  text-align: center;
  border-radius: 12px;

  transition: background-color 125ms linear,
    transform 525ms cubic-bezier(0.68, -0.25, 0.265, 1.55);

  &:hover {
    background-color: ${({ theme }) => theme.color_secondary_200 + "11"};
    transform: scale(1.1);
  }
`;

export const Item = (props) => {
  return (
    <StyledItem>
      {props.children}
      <Subtitle>{props.title}</Subtitle>
      <Pharagraph>{props.pharagraph}</Pharagraph>
    </StyledItem>
  );
};
