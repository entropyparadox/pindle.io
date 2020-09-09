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
  opacity: 90%;
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
  background-color: #ffffff;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 240px;
  line-height: 3.4rem;
  font-size: 20px;
  font-weight: 900;
  z-index: 10000;
  height: auto;
  color: #000;
  padding: 3rem 3rem;
  justify-content: end;
  align-items: flex-end;
`;

const li = styled.div `
  list-style: none;
`;


export const MobileNav = ({ handleClose }) => {
  return (
    <MenuContainer>
      <Backdrop onClick={handleClose} />
      <MenuMobileContainer>
        <ul>
          < Link to = {
            "/about"
          }
          style = {
            {
              textDecoration: "none",
              color: "#000",
              listStyle: "none"
            }
          } >
            <li>ABOUT</li>
          </Link>
          <Link
            to={"/partners"}
            style = {
              {
                textDecoration: "none",
                color: "#000",
                listStyle: "none"
              }
            }
          >
            <li>PARTNERS</li>
          </Link>
          <Link
            to={"/ambassadors"}
            style = {
              {
                textDecoration: "none",
                color: "#000",
                listStyle: "none"
              }
            }
          >
            <li>AMBASSADORS</li>
          </Link>
          <Link
            to={"/contact"}
            style = {
              {
                textDecoration: "none",
                color: "#000",
                listStyle: "none"
              }
            }
          >
            <li>CONTACT</li>
          </Link>
        </ul>
      </MenuMobileContainer>
    </MenuContainer>
  );
};
