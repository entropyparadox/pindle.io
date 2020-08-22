import React from "react";
import styled from "styled-components";

const MobileContainer = styled.div`
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const Container = styled.div`
  background: url("/img/1_map.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1250px;
  margin: 0 auto;
  height: 830px;
  margin-top: 150px;
  margin-bottom: 150px;
  padding: 700px 0px 0px 300px;
  @media (max-width: 800px) {
    height: 130px;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 700px 0px 0px 0px;
  }
`;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 400;
  color: #000066;
  @media (max-width: 800px) {
    font-size: 30px;
    width: 300px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  @media (max-width: 800px) {
    font-size: 12px;
    width: 300px;
  }
`;

export const One = () => {
  return (
    <MobileContainer>
      <Container>
        <MainTitle>Map your snaps in just one click! </MainTitle>
        <SubTitle>
          See what’s happening around the world via the pindle map.
          <br /> Choose the categories you want to explore! The categories
          include <br /> Culture, Food & Drink, Shopping, Nature, Lodging,
          Leisure.
        </SubTitle>
      </Container>
    </MobileContainer>
  );
};
