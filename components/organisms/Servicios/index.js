import React from "react";
import styled from "styled-components";
import { Container } from "../../../globalStyles";
import { AnchorLink } from "../../atoms/Link";
import { ResponsiveGrid } from "../../atoms/ResponsiveGrid";
import { Title } from "../../atoms/Title";
import { ImageBox } from "../../molecules/ImageBox";
import { Item } from "../../molecules/Item";

const Section = styled.section`
  padding: 100px 0px;
  background-color: ${({ theme }) => theme.color_background_300};
`;

const SectionContainer = styled(Container)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 60px;
`;

const Servicios = () => {
  return (
    <Section>
      <SectionContainer>
        <Title ta="center">Nuestros Servicios</Title>
        <ResponsiveGrid
          gap="20px"
          responsiveType="auto-fit"
          min="260px"
          max="1fr"
        >
          <AnchorLink href="/">
            <Item
              title="Diagnostico por imagen"
              pharagraph="Informese sobre los Diagnostico por Imagen que se puedan hacer en el Hospital, tales como Radiografias, Tomografias, etc."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/illustrations/diagPorImg.svg"
                quality={40}
              />
            </Item>
          </AnchorLink>

          <AnchorLink href="/">
            <Item
              title="Consultorios y guardias"
              pharagraph="Contamos con profesionales de la salud disponibles para dar consultas y guardia durante las 24 horas del dia."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/stock/doctora.png"
                quality={40}
              />
            </Item>
          </AnchorLink>

          <AnchorLink href="/">
            <Item
              title="Servicio de internación"
              pharagraph="Nuestras instalaciones cuentan con amplias camacidades para el servicios de internación."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/stock/internacion.png"
                quality={40}
              />
            </Item>
          </AnchorLink>

          <AnchorLink href="/">
            <Item
              title="Analisis clínicos"
              pharagraph="Realizamos gran mayoria de análisis clínicos, con la dedicación y cuidado que necesitas."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/stock/analisis.png"
                quality={40}
              />
            </Item>
          </AnchorLink>

          <AnchorLink href="/">
            <Item
              title="Vacunaciones"
              pharagraph="Tenemos a disposición todas las vacunas que necesitan los niños, adolescentes y adultos."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/stock/vacunacion.png"
                quality={40}
              />
            </Item>
          </AnchorLink>

          <AnchorLink href="/">
            <Item
              title="Salud Mental"
              pharagraph="Contamos con una division a cargo de la salud mental, con profesionales capacitados y con las instalaciones adecuadas."
            >
              <ImageBox
                width="100%"
                height="150px"
                sourceImage="/images/stock/psiquiatria.png"
                quality={40}
              />
            </Item>
          </AnchorLink>
        </ResponsiveGrid>
      </SectionContainer>
    </Section>
  );
};

export default Servicios;
