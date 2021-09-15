import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font_xl};
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1px;
  font-family: "Merriweather", serif;

  text-align: ${({ ta }) => ta};

  color: ${({ theme }) => theme.color_primary_500};

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.font_large};
    line-height: 1.3;
  }
`;
