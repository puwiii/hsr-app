import React from "react";
import { Container } from "../../../globalStyles";
import { SectionContainer } from "../../molecules/SectionContainer";
import Header from "../../organisms/Header";
import InfoSection from "../../organisms/InfoSection";
import GridItems from "../../organisms/GridItems";
import Carousel from "../../organisms/Carousel";
import Footer from "../../organisms/Footer";
import { serviciosData } from "../../data/servicios.data";
import { programasData } from "../../data/programas.data";
import { bannerData } from "../../data/banner.data";
import { administracionData } from "../../data/administracion.data";

import styled from "styled-components";

const HomepageContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel data={bannerData} quality={70} />
      <SectionContainer>
        <InfoSection
          title="Tu salud es lo más importante"
          subtitle="La mejor atención de la ciudad."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          mediaType={0}
          mediaSource="home.json"
          isColumn={true}
        />
      </SectionContainer>
      <SectionContainer
        backgroundOpacity={0.07}
        backgroundSource="/images/stock/radiografia.jpg"
      >
        <GridItems
          key={2}
          data={serviciosData}
          title="Nuestros Servicios"
          areLinks={true}
          gap="40px"
          responsiveType="auto-fit"
          min="320px"
          max="1fr"
          minMobile="300px"
          maxMobile="1fr"
          qualityMedia={40}
          mediaHeight="100px"
          mediaWidth="200px"
          layoutItems="row"
          textAlignItems="left"
        />
      </SectionContainer>
      <SectionContainer
        backgroundOpacity={0.05}
        // backgroundSource="/images/stock/stock1.jpg"
      >
        <GridItems
          key={1}
          data={programasData}
          // alignItems="flex-end"
          title="Programas del hospital"
          areLinks={true}
          gap="40px"
          responsiveType="auto-fit"
          min="220px"
          max="1fr"
          minMobile="150px"
          maxMobile="1fr"
          qualityMedia={40}
          mediaHeight="70px"
        />
      </SectionContainer>
      <SectionContainer
        backgroundOpacity={0.05}
        backgroundSource="/images/stock/table.jpg"
        // variantColor={true}
      >
        <GridItems
          key={2}
          data={administracionData}
          title="¿Quienes somos?"
          areLinks={false}
          gap="40px"
          responsiveType="auto-fit"
          min="300px"
          max="1fr"
          minMobile="300px"
          maxMobile="1fr"
          qualityMedia={70}
          mediaHeight="350px"
          mediaWidth="100%"
          mediaObjectFit="cover"
          // layoutItems="row"
          textAlignItems="center"
          clipMedia={true}
          blurItems={false}
        />
      </SectionContainer>
      <Footer />{" "}
    </>
  );
};

export default Homepage;
