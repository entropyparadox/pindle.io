import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  background: #eaeaea;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const Box = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 200px;
`;

const LogoImage = styled.img`
  height: 100px;
  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Box>
        <LogoImage src="img/logo.svg" alt="logo" />
      </Box>
    </Container>
  );
};
