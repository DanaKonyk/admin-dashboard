import styled from "styled-components";
import { theme } from "../../stylesheets/GlobalColors";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.div`
  padding: 17px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1d1e2119;

  @media (width > 767px) {
    padding: 15px 36px;
  }

  @media (width > 1439px) {
    padding: 15px 40px 15px 20px;
  }
`;

export const BtnMenu = styled.button`
  margin-inline-end: 20px;
  z-index: 5;
  svg {
    inline-size: 32px;
    block-size: 32px;
    stroke: ${theme.colors.main};
  }
  @media (width > 1439px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  margin-inline-end: 20px;
  inline-size: 32px;
  block-size: 32px;
  @media (width > 767px) {
    margin-inline-end: 32px;
    inline-size: 40px;
    block-size: 40px;
  }
  @media (width > 1439px) {
    margin-inline-end: 60px;
  }
`;

export const SidebarNav = styled.nav`
  padding-block: 92px 20px;
  padding-inline: 20px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  inline-size: 78px;
  block-size: 100%;
  border: 1px solid ${theme.colors.alfablue};
  background-color: ${theme.colors.secondary};

  animation: fade-in 0.8s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media (width > 767px) {
    padding-block-start: 100px;
    inline-size: 84px;
  }

  @media (width > 1439px) {
    padding-block-start: 40px;
    padding-inline: 18px;
    inline-size: 80px;
    top: 76px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  inline-size: 38px;
  block-size: 38px;

  cursor: pointer;
  background-color: ${theme.colors.light};
  border-radius: 50%;
  box-shadow: 0px -1px 7px 0px rgba(71, 71, 71, 0.05);

  @media (width > 767px) {
    inline-size: 44px;
    block-size: 44px;
  }

  &:is(:hover, :focus, .active) svg {
    fill: ${theme.colors.primary};
  }
  svg {
    inline-size: 12px;
    block-size: 12px;
    fill: ${theme.colors.icon};
    transition: fill ${theme.transition};

    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;

export const SidebarBtnLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  inline-size: 38px;
  block-size: 38px;

  background-color: ${theme.colors.primary};
  border-radius: 50%;

  @media (width > 767px) {
    inline-size: 44px;
    block-size: 44px;
  }

  @media (width > 1439px) {
    display: none;
  }

  svg {
    inline-size: 14px;
    block-size: 14px;
    @media (width > 767px) {
      inline-size: 16px;
      block-size: 16px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.166;
`;

export const UserText = styled.p`
  color: ${theme.colors.alfadarkblue};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const BtnLogout = styled.button`
  margin-inline-start: auto;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  inline-size: 44px;
  block-size: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${theme.transition};

  @media (width < 1440px) {
    display: none;
  }

  &:is(:hover, :focus) {
    background-color: ${theme.colors.primaryHover};
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
  }
`;
