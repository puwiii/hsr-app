import styled from "styled-components";

export const Pharagraph = styled.p`
  font-size: ${({ theme }) => theme.font_regular};
  color: ${({ theme }) => theme.color_text_400};
  font-weight: 500;
  line-height: 1.6;

  @media screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.font_small};
  }
`;
