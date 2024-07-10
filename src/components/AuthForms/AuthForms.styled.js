import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";
import lines from "../../images/lines.png";

export const ImgWrap = styled.div`
  margin-block: 24px 148px;
  display: flex;
  align-items: center;
  gap: 14px;
  @media (width > 767px) {
    margin-block-end: 204px;
  }
  @media (width > 1439px) {
    margin-block: 28px 226px;
  }
  img {
    inline-size: 44px;
    block-size: 44px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const MainWrap = styled.div`
  @media (width > 1439px) {
    display: flex;
    gap: 150px;
  }
`;

export const TitleWrap = styled.div`
  margin-block-end: 40px;
  position: relative;
  @media (width > 767px) {
    margin-block-end: 50px;
  }
  h1 {
    max-width: 335px;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.214;
    @media (width > 767px) {
      max-width: 614px;
      font-size: 54px;
      line-height: 1.111;
    }
  }
  img {
    position: absolute;
    top: -55px;
    left: 214px;
    inline-size: 95px;
    block-size: 93px;
    @media (width > 767px) {
      top: -110px;
      left: 410px;
      inline-size: 179px;
      block-size: 175px;
    }
  }
  span {
    color: ${theme.colors.primary};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (width > 767px) {
    max-inline-size: 323px;
  }
  @media (width > 1439px) {
    gap: 17px;
  }
`;

export const InputWrap = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 46px;
    margin-inline-start: 20px;
    color: ${theme.colors.accent};
    font-size: 10px;
  }

  &[id="password"] {
    margin-block: 14px 40px;
  }
`;

export const Input = styled.input`
  position: relative;
  padding: 13px 18px;
  inline-size: 100%;
  border: 1px solid #1d1e2119;
  border-radius: 60px;
  background: ${theme.colors.light};
  outline: none;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  &::placeholder {
    color: ${theme.colors.alfadarkblue};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const EyeBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 18px;
  border: none;
  background: none;
`;

export const BtnSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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
    padding: 13px 147px;
  }

  padding: 13px 135px;
`;

export const BgImg = styled.div`
  background: no-repeat url(${lines});
  position: absolute;
  left: 117px;
  right: 0;
  top: 650px;
  bottom: -300px;
  @media (width > 767px) {
    top: 770px;
    left: 495px;
    bottom: -490px;
  }
  @media (width > 1439px) {
    top: 440px;
    left: 1120px;
    bottom: 0;
  }
`;
