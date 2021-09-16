import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Subtitle } from "../../atoms/Subtitle";
import { Title } from "../../atoms/Title";
import { Pharagraph } from "../../atoms/Pharagraph";
import { Container } from "../../../globalStyles";
import { AnimationBox } from "../../atoms/AnimationBox";

const StyledInfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoSectionMedia = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const InfoSectionText = styled.div`
  width: 100%;
  height: 100%;
  gap: 40px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-items: center;
  flex-direction: column;
`;

// MEDIA_TYPES=[
//     0: 'animation',
//     1: 'Image',
// ]

const Index = ({
  title,
  subtitle,
  pharagraph,
  mediaType,
  mediaSource = "",
  isColumn = false,
}) => {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    switch (mediaType) {
      case 0:
        console.log("animation");
        setMedia(<AnimationBox animationPath={mediaSource} />);
    }
  }, [mediaType, mediaSource]);

  return (
    <StyledInfoSection isColumn={isColumn}>
      <InfoSectionText>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Pharagraph>{pharagraph}</Pharagraph>
      </InfoSectionText>
      <InfoSectionMedia>{media}</InfoSectionMedia>
    </StyledInfoSection>
  );
};

export default Index;
