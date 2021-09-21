import React from "react";
import styled from "styled-components";
import { ImageBox } from "../atoms/ImageBox";
import { Pharagraph } from "../atoms/Pharagraph";
import { Subtitle } from "../atoms/Subtitle";

const StyledItem = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ layout }) => (layout ? layout : "column")};
  align-items: ${({ layout }) => (layout ? "flex-start" : "center")};
  gap: 30px;
  padding: 20px 20px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  border-radius: 12px;

  transition: background-color 125ms linear,
    transform 525ms cubic-bezier(0.68, -0.25, 0.265, 1.55);

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  backdrop-filter: ${({ blur }) => blur && "blur(10px)"};

  border: ${({ blur }) => blur && "1px solid rgba(255, 255, 255, 0.4)"};

  &:hover {
    background-color: ${({ theme, isReactive }) =>
      isReactive && theme.color_secondary_200 + "1f"};
    transform: ${({ isReactive }) => isReactive && "scale(1.08)"};
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = (props) => {
  return (
    <StyledItem
      isReactive={props.isReactive}
      textAlign={props.textAlign}
      layout={props.layout}
      blur={props.blurItem}
    >
      {props.source && (
        <ImageBox
          width={props.mediaWidth}
          height={props.mediaHeight}
          sourceImage={props.source}
          quality={props.quality}
          circleClip={props.clipMedia}
          objectFit={props.mediaObjectFit}
        />
      )}
      <StyledText>
        <Subtitle>{props.title}</Subtitle>
        <Pharagraph>{props.description}</Pharagraph>
      </StyledText>
    </StyledItem>
  );
};
