import React from "react";
import styled from "styled-components";

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
  font-weight: bold;
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
          <li>ABOUT</li>
          <li>PARTNERS</li>
          <li>JOBS</li>
          <li>CONTACT</li>
          <li>AMBASSADORS</li>
        </ul>
      </MenuMobileContainer>
    </MenuContainer>
  );
};
