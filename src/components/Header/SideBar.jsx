import sprite from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { Link, SidebarBtnLogout, SidebarNav } from "./Header.styled";

const SideBar = ({ onClose, onLogOut }) => {
  return (
    <SidebarNav>
      <ul onClick={onClose}>
        <li>
          <Link to="/dashboard">
            <svg>
              <use href={`${sprite}#icon-dashboard`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <svg>
              <use href={`${sprite}#icon-orders`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <svg>
              <use href={`${sprite}#icon-products`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/suppliers">
            <svg>
              <use href={`${sprite}#icon-suppliers`} />
            </svg>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <svg>
              <use href={`${sprite}#icon-customers`} />
            </svg>
          </Link>
        </li>
      </ul>
      <SidebarBtnLogout type="button" onClick={onLogOut}>
        <svg>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </SidebarBtnLogout>
    </SidebarNav>
  );
};

export default SideBar;
