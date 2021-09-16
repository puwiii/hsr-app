import React from "react";
import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { AnchorLink } from "../../atoms/Link";
import { ResponsiveGrid } from "../../atoms/ResponsiveGrid";
import { Title } from "../../atoms/Title";
import { ImageBox } from "../../atoms/ImageBox";
import { Item } from "../../molecules/Item";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;

  @media screen and (max-width: 425px) {
    gap: 10px;
  }
`;

const Servicios = ({
  data = [],
  title,
  gap,
  responsiveType = "auto-fill",
  min,
  max,
  minMobile,
  maxMobile,
  areLinks = false,
  reactiveItems = false,
  qualityMedia = 40,
}) => {
  return (
    <Section>
      {title && <Title>Nuestros Servicios</Title>}

      <ResponsiveGrid
        gap={gap}
        responsiveType={responsiveType}
        min={min}
        max={max}
        minMobile={minMobile}
        maxMobile={maxMobile}
      >
        {areLinks
          ? data.map((item, index) => (
              <AnchorLink href={item.link} key={index}>
                <Item
                  key={index}
                  title={item.name}
                  description={item.description}
                  isReactive={areLinks}
                  mediaWidth="100%"
                  mediaHeight="120px"
                  source={item.mediaSource}
                  quality={qualityMedia}
                />
              </AnchorLink>
            ))
          : data.map((item, index) => (
              <Item
                key={index}
                title={item.name}
                description={item.description}
                isReactive={areLinks}
                mediaWidth="100%"
                mediaHeight="120px"
                source={item.mediaSource}
                quality={40}
              />
            ))}
      </ResponsiveGrid>
    </Section>
  );
};

export default Servicios;
