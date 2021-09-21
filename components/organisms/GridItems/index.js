import React from "react";
import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { AnchorLink } from "../../atoms/Link";
import { ResponsiveGrid } from "../../atoms/ResponsiveGrid";
import { Title } from "../../atoms/Title";
import { ImageBox } from "../../atoms/ImageBox";
import { Item } from "../../molecules/Item";
import Link from "next/link";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: ${({ alignItems }) => alignItems};
  gap: 80px;

  @media screen and (max-width: 425px) {
    gap: 40px;
  }
`;

const Servicios = ({
  data = [],
  title,
  gap,
  responsiveType = "auto-fill",
  alignItems = "flex-start",
  min,
  max,
  minMobile,
  maxMobile,
  areLinks = false,
  qualityMedia = 40,
  mediaWidth = "100%",
  mediaHeight,
  layoutItems,
  textAlignItems,
  clipMedia = false,
  mediaObjectFit = "contain",
  blurItems = false,
}) => {
  return (
    <Section alignItems={alignItems}>
      {title && <Title>{title}</Title>}

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
              <Link href={item.link} passHref={true} key={index}>
                <a>
                  <Item
                    key={index}
                    title={item.name}
                    description={item.description}
                    isReactive={areLinks}
                    mediaWidth={mediaWidth}
                    mediaHeight={mediaHeight}
                    source={item.mediaSource}
                    quality={qualityMedia}
                    layout={layoutItems}
                    textAlign={textAlignItems}
                    clipMedia={clipMedia}
                    mediaObjectFit={mediaObjectFit}
                    blurItem={blurItems}
                  />
                </a>
              </Link>
            ))
          : data.map((item, index) => (
              <Item
                key={index}
                title={item.name}
                description={item.description}
                isReactive={areLinks}
                mediaWidth={mediaWidth}
                mediaHeight={mediaHeight}
                source={item.mediaSource}
                quality={qualityMedia}
                layout={layoutItems}
                textAlign={textAlignItems}
                clipMedia={clipMedia}
                mediaObjectFit={mediaObjectFit}
                blurItem={blurItems}
              />
            ))}
      </ResponsiveGrid>
    </Section>
  );
};

export default Servicios;
