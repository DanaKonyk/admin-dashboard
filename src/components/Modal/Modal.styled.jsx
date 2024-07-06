import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const BtnCloseWrap = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  padding: 0;
  background: transparent;

  & svg {
    stroke: ${theme.colors.main};
    transition: stroke ${theme.transition};

    &:is(:hover, :focus) {
      stroke: ${theme.colors.primary};
    }
  }
`;
