import styled from "styled-components";

const StyledResponsiveFlexbox = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResponsiveFlexbox = ({
  alignItems = "center",
  justifyContent = "center",
  direction = "row",
  gap = "40px",
  children,
}) => {
  return (
    <StyledResponsiveFlexbox
      ai={alignItems}
      jc={justifyContent}
      gap={gap}
      direction={direction}
      childer
    >
      {children}
    </StyledResponsiveFlexbox>
  );
};
