import styled from "styled-components";

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.font_medium};
  color: ${({ theme }) => theme.color_text_300};
  font-weight: 600;
  letter-spacing: -0.5px;

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.font_regular};
  }
`;
