import React from "react";
import Header from "../organisms/Header";
import InfoSection from "../organisms/InfoSection";
import GridServices from "../organisms/Servicios";

const Homepage = () => {
  return (
    <>
      <Header />
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
        pharagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        mediaType={0}
        mediaSource="home.json"
        isColumn={true}
      />

      <GridServices />
    </>
  );
};

export default Homepage;
