import React, { useState } from "react";
import styled from "styled-components";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 50px;
  top: 60px;
  opacity: 0.7;
  z-index: 100;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const HeaderBox = styled.div`
  display: flex;
  max-width: 1250px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const LogoImage = styled.img`
  height: 30px;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  width: 570px;
  justify-content: space-between;
  font-weight: bold;
  color: #000;
  margin: 0;
  text-decoration: none;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuLogo = styled.img`
  width: 24px;
  height: 20px;
  @media (min-width: 801px) {
    display: none;
  }
`;

export const DetailHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <HeaderBox>
          <div>
            <Link to={"/"}>
              <LogoImage src="img/logo.svg" />
            </Link>
          </div>
          <MenuList>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to={"/partners"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>PARTNERS</li>
            </Link>
            <Link
              to={"/ambassadors"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>AMBASSADORS</li>
            </Link>
            <Link
              to={"/contact"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <li>CONTACT</li>
            </Link>
          </MenuList>
          <MenuLogo src="/img/menu.svg" alt="logo" onClick={handleOpen} />
        </HeaderBox>
      </Container>
      {isOpen ? <MobileNav handleClose={handleClose} /> : ""}
    </>
  );
};
