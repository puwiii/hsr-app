import { AnchorLink } from "../atoms/Link";
import styled from "styled-components";
import { ResponsiveFlexbox } from "../atoms/ResponsiveFlexbox";
import { Subtitle } from "../atoms/Subtitle";

const StyledBox = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color_text_200};
  padding: 0 10px;
`;

const StyledTitle = styled.h4`
  display: flex;
  gap: 5px;
  font-size: ${({ theme }) => theme.font_regular};
  font-weight: 600;
  color: ${({ theme }) => theme.color_text_200};
`;

export const LinksBox = ({ title, direction, links, icon }) => {
  return (
    <StyledBox>
      <ResponsiveFlexbox
        direction={direction}
        alignItems="flex-start"
        gap="20px"
      >
        <StyledTitle>
          {icon}
          {title}
        </StyledTitle>
        {links.map((item, index) => (
          <AnchorLink href={item.link} key={index}>
            {item.icon}
            {item.label}
          </AnchorLink>
        ))}
      </ResponsiveFlexbox>
    </StyledBox>
  );
};
