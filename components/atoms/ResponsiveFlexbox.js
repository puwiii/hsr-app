import styled from "styled-components";

const StyledResponsiveFlexbox = styled.div`
  display: flex;
  gap: 40px;

  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResponsiveFlexbox = ({
  alignItems = "center",
  justifyContent = "center",
  Component,
  pageProps,
}) => {
  return (
    <StyledResponsiveFlexbox ai={alignItems} jc={justifyContent}>
      <Component {...pageProps} />
    </StyledResponsiveFlexbox>
  );
};
