import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";

export const ContentWrap = styled.div`
  @media (width > 767px) {
    padding-inline: 20px;
  }
  h2 {
    margin-block-end: 40px;
    align-self: start;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  input {
    @media (width > 767px) {
      inline-size: 224px;
    }
  }
`;

export const Form = styled.form`
  inline-size: 295px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (width > 767px) {
    inline-size: 462px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const BtnWrap = styled.div`
  margin-block-start: 26px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (width > 767px) {
    margin-block-end: 20px;
  }
`;

export const AddBtn = styled.button`
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
    padding: 13px 61px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 13px 52px};
`;

export const CancelBtn = styled.button`
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
    padding: 13px 50px;
    font-size: 12px;
    line-height: 1.5;
  }
  padding: 12px 42px;
  border: 1px solid transparent;
  background-color: ${theme.colors.alfablue};
  color: ${theme.colors.alfadarkblue};
  &:is(:hover, :focus) {
    border: 1px solid ${theme.colors.primary};
    background-color: transparent;
    color: ${theme.colors.primary};
  }
`;
