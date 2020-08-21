import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 50px;
  top: 60px;
  background: #ebebeb;
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
  color: #000;
  margin: 0;
  @media (max-width: 800px) {
    width: 200px;
    overflow-x: scroll;
  }
`;

export const Header = () => {
  return (
    <Container>
      <HeaderBox>
        <div>
          <LogoImage src="img/logo.svg" />
        </div>
        <MenuList>
          <li>ABOUT</li>
          <li>PARTNERS</li>
          <li>JOBS</li>
          <li>CONTACT</li>
          <li>AMBASSADORS</li>
        </MenuList>
      </HeaderBox>
    </Container>
  );
};
