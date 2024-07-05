import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const ProductsWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (width > 767px) {
    align-items: end;
    justify-content: space-between;
  }
`;

export const BtnWrap = styled.div`
  margin-block-start: 18px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  span {
    font-size: 14px;
    line-height: 1.285;
  }
`;

export const BtnAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 42px;
  block-size: 42px;
  border-radius: 50%;
  background-color: ${theme.colors.primary};
  transition: background-color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryHover};
  }

  svg {
    inline-size: 30px;
    block-size: 30px;
    fill: ${theme.colors.light};
  }
`;

export const TableBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button:first-child {
    border: 1px solid #59b17a7f;
  }
  button:last-child {
    border: 1px solid #e850507f;
  }
`;

export const BtnModify = styled.button`
  inline-size: 32px;
  block-size: 32px;
  border-radius: 50%;
  transition: background-color ${theme.transition};
  &:is(:hover, :focus) {
    background-color: #e9eb9fe1;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;
