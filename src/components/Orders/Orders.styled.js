import styled, { css } from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const Form = styled.form`
  margin-block-start: 40px;
  display: flex;
  gap: 8px;
  @media (width > 1439px) {
    margin-inline-start: 80px;
  }
`;

export const Input = styled.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  border-radius: 60px;
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  @media (width > 767px) {
    max-inline-size: 224px;
  }

  &::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const FilterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 30px;
  border-radius: 60px;
  font-size: 14px;
  line-height: 1.285;
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  transition: background-color ${theme.transition}, color ${theme.transition};

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 1.5;
  }

  flex-direction: row-reverse;
  gap: 10px;
`;

export const TableWrap = styled.div`
  margin-block: 20px 10px;
  max-inline-size: 335px;
  overflow-y: hidden;

  @media (width > 767px) {
    max-inline-size: 704px;
  }

  @media (width > 1439px) {
    margin-inline-start: 80px;
    max-inline-size: 100%;
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

  @media (width > 1439px) {
    inline-size: 100%;
  }

  td {
    vertical-align: middle;
    padding-inline: 10px;
  }
  tbody {
    background-color: ${theme.colors.light};
  }

  img {
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    @media (width > 767px) {
      inline-size: 36px;
      block-size: 36px;
    }
  }
`;

export const Status = styled.div`
  inline-size: 92px;
  block-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  font-size: 12px;
  line-height: 1.25;

  ${({ $variant }) =>
    $variant === "Completed" &&
    css`
      color: ${theme.colors.primary};
      background: #59b17a19;
    `};
  ${({ $variant }) =>
    $variant === "Confirmed" &&
    css`
      color: ${theme.colors.confirmed};
      background: #8059e419;
    `};
  ${({ $variant }) =>
    $variant === "Pending" &&
    css`
      color: ${theme.colors.pending};
      background: #f7904219;
    `};
  ${({ $variant }) =>
    $variant === "Cancelled" &&
    css`
      color: ${theme.colors.accent};
      background: #e8505019;
    `};
  ${({ $variant }) =>
    $variant === "Processing" &&
    css`
      color: ${theme.colors.processing};
      background: #70a6e819;
    `};
  ${({ $variant }) =>
    $variant === "Shipped" &&
    css`
      color: #00ffff;
      background: #70e8e218;
    `};
  ${({ $variant }) =>
    $variant === "Delivered" &&
    css`
      color: #ffff00;
      background: #e8d27017;
    `};
  ${({ $variant }) =>
    $variant === "active" ||
    ($variant === "Active" &&
      css`
        inline-size: 89px;
        color: ${theme.colors.primary};
        background: #59b17a19;
      `)};
  ${({ $variant }) =>
    $variant === "deactive" ||
    ($variant === "Deactive" &&
      css`
        inline-size: 89px;
        color: ${theme.colors.accent};
        background: #e8505019;
      `)};
`;

// export const BtnPageWrap = styled.div`
//   padding-block: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 5px;

//   button {
//     transition: 1s;
//     &:is(:hover, :focus) {
//       scale: 1.1;
//     }
//   }

//   span {
//     color: ${theme.colors.primary};
//   }
//   @media (width > 1439px) {
//     margin-inline-start: 80px;
//     gap: 8px;
//   }
// `;

export const BtnPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageDot = styled.button`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) =>
    props.active ? theme.colors.primary : theme.colors.icon};
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;
