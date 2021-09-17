import React from "react";
import Header from "../../organisms/Header";
import InfoSection from "../../organisms/InfoSection";
import GridItems from "../../organisms/GridItems";
import Carousel from "../../organisms/Carousel";
import { serviciosData } from "../../data/servicios.data";
import { programasData } from "../../data/programas.data";
import { bannerData } from "../../data/banner.data";
import { Container } from "../../../globalStyles";

import styled from "styled-components";

const HomepageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 70px;
  gap: 100px;
`;

const Homepage = () => {
  return (
    <>
      <Header />

      <Carousel data={bannerData} quality={70} />
      <HomepageContainer>
        {/* <Banner
        sourceImage="/images/banner/hospital.jpg"
        alt="información coronavirus"
        width="100%"
        height="600px"
        objectFit="cover"
      /> */}
        <InfoSection
          title="Tu salud es lo más importante"
          subtitle="La mejor atención de la ciudad."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          mediaType={0}
          mediaSource="home.json"
          isColumn={true}
        />

        <GridItems
          key={2}
          data={serviciosData}
          title="Nuestros Servicios"
          areLinks={true}
          gap="40px"
          responsiveType="auto-fill"
          min="290px"
          max="350px"
          minMobile="150px"
          maxMobile="1fr"
          qualityMedia={40}
          mediaHeigth="120px"
        />

        <GridItems
          key={1}
          data={programasData}
          title="Programas del hospital"
          areLinks={true}
          gap="10px"
          responsiveType="auto-fill"
          min="300px"
          max="350px"
          minMobile="150px"
          maxMobile="1fr"
          qualityMedia={40}
          mediaHeigth="100px"
        />
      </HomepageContainer>
    </>
  );
};

export default Homepage;
