import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "../Banner";

const StyledCarousel = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
  margin: 0 0 50px 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Index = ({ data, quality }) => {
  return (
    <StyledCarousel>
      {/* <AtomicImage
        src="/images/banner/coronavirus-1.png"
        width={4}
        height={1}
        layout="responsive"
        objectFit="contain"
      /> */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={10000}
        showThumbs={false}
        transitionTime={1000}
      >
        {data.map((item, index) => (
          <Banner
            key={index}
            mediaSource={item.mediaSource}
            alt={item.alt}
            aspectRatio={item.aspectRatio}
            width="100%"
            height="100%"
            quality={quality}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            mediaType={-1}
          />
        ))}
      </Carousel>
    </StyledCarousel>
  );
};

export default Index;
