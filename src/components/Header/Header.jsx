import { useState } from "react";
import sprite from "../../images/sprite.svg";
import logo from "../../images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import SideBar from "./SideBar";
import {
  BtnLogout,
  BtnMenu,
  HeaderWrap,
  LogoImg,
  Title,
  UserText,
} from "./Header.styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    isMenuOpen
      ? (document.body.style.overflowY = "auto")
      : (document.body.style.overflowY = "hidden");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflowY = "auto";
  };

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <HeaderWrap>
      {isMenuOpen ? (
        <>
          <BtnMenu type="button" onClick={toggleMenu}>
            <svg>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </BtnMenu>
        </>
      ) : (
        <>
          <BtnMenu type="button" onClick={toggleMenu}>
            <svg>
              <use href={`${sprite}#icon-close`} />
            </svg>
          </BtnMenu>
          <SideBar onClose={closeMenu} onLogOut={handleLogOut} />
        </>
      )}
      <NavLink to="/">
        <LogoImg src={logo} alt="logo" />
      </NavLink>
      <div>
        <Title>Medicine Store</Title>
        <UserText>{user.email}</UserText>
      </div>
      <BtnLogout type="button" onClick={handleLogOut}>
        <svg>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </BtnLogout>
    </HeaderWrap>
  );
};

export default Header;
