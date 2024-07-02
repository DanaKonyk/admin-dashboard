import styled, { css } from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const List = styled.ul`
  margin-block-start: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
  li {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    inline-size: 157px;
    block-size: 98px;

    cursor: pointer;
    border: 1px solid ${theme.colors.alfablue};
    border-radius: 15px;
    background-color: ${theme.colors.light};
    transition: border-color ${theme.transition};

    @media (width > 767px) {
      padding: 14px 18px;
      inline-size: 221px;
      block-size: 108px;
    }
    @media (width > 1439px) {
      inline-size: 240px;
      block-size: 108px;
    }

    &:is(:hover, :focus, .active) {
      border-color: ${theme.colors.primary};
    }
  }

  li svg {
    inline-size: 18px;
    block-size: 18px;
    stroke: ${theme.colors.main};
    fill: none;
    @media (width > 767px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }
`;

export const StatWrap = styled.div`
  display: flex;
  max-width: 107px;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 28px;
  column-gap: 8px;
`;

export const Title = styled.h2`
  color: ${theme.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.166;
`;

export const Amount = styled.p`
  font-weight: 600;
  line-height: 1.25;
  @media (width > 767px) {
    font-size: 24px;
    line-height: 1.333;
  }
`;

export const TablesWrap = styled.div`
  margin-block: 20px 80px;
  max-inline-size: 335px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 68px;
  @media (width > 767px) {
    max-inline-size: 704px;
  }
  @media (width > 1439px) {
    align-items: start;
    margin-inline-start: 80px;
    max-inline-size: 1280px;
    flex-direction: row;
    gap: 20px;
  }
`;

export const OneTableWrap = styled.div`
  border-radius: 8px;
  overflow: auto;
  @media (width > 767px) {
    max-block-size: 435px;
  }
  @media (width > 1439px) {
    max-inline-size: 630px;
  }
`;

export const Table = styled.table`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.166;
  white-space: nowrap;
  inline-size: 100%;

  @media (width > 767px) {
    font-size: 16px;
    line-height: 1.125;
  }
  td {
    padding-inline: 20px;
  }
  &.firstTable td {
    vertical-align: middle;
    padding-inline: 15px;
  }
  tbody {
    background-color: ${theme.colors.light};
  }

  img {
    inline-size: auto;
    block-size: 24px;
    @media (width > 767px) {
      block-size: 36px;
    }
  }
`;

export const TableTitle = styled.th`
  padding: 14px;
  border-radius: 8px 8px 0 0;
  background-color: ${theme.colors.tablehead};
  text-align: left;
  font-size: 20px;
  @media (width > 767px) {
    padding: 20px;
  }
`;

export const TableSubTitle = styled.td`
  color: ${theme.colors.alfadarkblue};
  padding: 10px 14px;
  @media (width > 767px) {
    padding: 20px 29px;
  }
`;

export const FirstRow = styled.td`
  padding-inline: 14px 10px;
  @media (width > 767px) {
    padding-inline: 20px 15px;
    padding-block: 14px;
    display: flex;
    align-items: center;
  }
`;

export const SecondRow = styled.td`
  @media (width < 768px) {
    max-inline-size: 118px;
  }
  padding: 10px;
  white-space: normal;
`;

export const Label = styled.div`
  inline-size: 80px;
  block-size: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({ $variant }) =>
    $variant === "Expense" &&
    css`
      color: ${theme.colors.accent};
      background-color: #e8505019;
    `};
  ${({ $variant }) =>
    $variant === "Income" &&
    css`
      color: ${theme.colors.primary};
      background-color: #59b17a19;
    `};
  ${({ $variant }) =>
    $variant === "Error" &&
    css`
      color: ${theme.colors.main};
      background-color: ${theme.colors.alfablue};
    `};
`;
