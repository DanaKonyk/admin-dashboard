import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const BtnSupAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;

  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};

  transition: background-color ${theme.transition};

  @media screen and (max-width: 767px) {
    margin-block-start: 16px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 13px 30px;
  border: 1px solid #59b17a7f;
  background-color: transparent;
  color: ${theme.colors.main};
  &:hover {
    border: 1px solid ${theme.colors.primaryHover};
    background-color: ${theme.colors.primaryHover};
  }
`;

export const BtnSupEdit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  inline-size: 82px;
  block-size: 34px;
  border-radius: 30px;
  border: 1px solid #59b17a7f;
  transition: background-color 350ms ease;

  &:is(:hover, :focus) {
    background-color: #59b17a7f;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
  }

  span {
    color: #59b17a;
    line-height: 1.125;
    font-size: 12px;
  }
`;
