import styled from "styled-components";

export const Title = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.font_xl};
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.5px;
  font-family: "Merriweather", serif;

  text-align: ${({ ta }) => ta};

  color: ${({ theme }) => theme.color_primary_600};

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0px;
    width: calc(80% - 15px);
    height: 70%;
    border-radius: 2px;
    z-index: 1;
    background: ${({ theme }) => theme.color_primary_600 + "22"};
  }

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.font_large};
    line-height: 1.3;
  }
`;
