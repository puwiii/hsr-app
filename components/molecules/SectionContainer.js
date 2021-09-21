import { Container } from "../../globalStyles";
import styled from "styled-components";

const StyledSection = styled.div`
  padding: ${({ padding }) => (padding ? `${padding} 0` : `100px 0`)};
  background-color: ${({ theme, variantColor }) =>
    variantColor ? theme.color_background_300 : "transparent"};
  margin: auto;
  position: relative;

  &::before {
    /* filter: blur(10px); */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${({ backgroundOpacity }) =>
      backgroundOpacity ? backgroundOpacity : "1"};
    z-index: -1;
    background-image: ${({ backgroundSource }) =>
      backgroundSource && `url('${backgroundSource}')`};

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-attachment: fixed;
  }

  @media screen and (max-width: 425px) {
    padding: 50px 0;
  }
`;

export const SectionContainer = (props) => {
  return (
    <StyledSection
      variantColor={props.variantColor}
      padding={props.padding}
      backgroundOpacity={props.backgroundOpacity}
      backgroundSource={props.backgroundSource}
    >
      <Container>{props.children}</Container>
    </StyledSection>
  );
};
