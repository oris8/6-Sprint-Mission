import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import Button from "./BaseButton";

import logo from "../assets/img/panda-logo.svg";
import logoTypo from "../assets/img/panda-logo-typo.svg";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <StyledNavbar className="Navbar">
      <NavLink to="/" className="Navbar__logo-section">
        <img src={logo} className="Navbar__logo" alt="판다마켓" />
        <img src={logoTypo} className="Navbar__logo-typo" alt="판다마켓" />
      </NavLink>
      <StyledNavLink
        to="/community"
        className={({ isActive }) => isActive && "active"}
      >
        자유게시판
      </StyledNavLink>
      <StyledNavLink
        to="/items"
        className={
          pathname === "/items" || pathname === "/additem" ? "active" : ""
        }
      >
        중고마켓
      </StyledNavLink>
      <NavLink to="/login" className="Navbar__login">
        <Button size="small" className="Navbar__button">
          로그인
        </Button>
      </NavLink>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 70px;
  padding: 0 16px;
  border-bottom: 1px solid #dfdfdf;
  background-color: #fff;
  z-index: 2;

  .Navbar__logo {
    display: none;
  }

  .Navbar__logo-typo {
    margin-right: 8px;
  }

  .Navbar__login {
    margin-left: auto;
  }

  .Navbar__button {
    width: 88px;
    height: 42px;
  }

  @media screen and (min-width: 768px) {
    gap: 0px;
    padding: 0 24px;

    .Navbar__logo {
      display: block;
      margin-right: 20px;
    }

    .Navbar__logo-typo {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    gap: 0px;
    padding: 0 200px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-cool-gray-600);

  &.active {
    color: var(--color-blue);
  }

  @media screen and (min-width: 768px) {
    width: 109px;
    font-size: 18px;
    text-align: center;
  }
`;

export default Navbar;
