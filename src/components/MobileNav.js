import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const MenuMobileContainer = styled.div`
  background-color: #ebebeb;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 200px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.3px;
  z-index: 10000;
  height: auto;
  color: #000;
  padding: 50px 30px 0px 0px;
  justify-content: end;
  align-items: flex-end;
`;

export const MobileNav = ({ handleClose }) => {
  return (
    <MenuContainer>
      <Backdrop onClick={handleClose} />
      <MenuMobileContainer>
        <ul>
          <Link to={"/about"} style={{ textDecoration: "none", color: "#000" }}>
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
        </ul>
      </MenuMobileContainer>
    </MenuContainer>
  );
};
