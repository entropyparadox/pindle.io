import React from "react";
import styled from "styled-components";
import { Card } from "../card";

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 200px;
  @media (max-width: 800px) {
    margin-top: 150px;
  }
`;

const Title = styled.div`
  color: #000066;
  font-size: 60px;
  margin-left: 20px;
  @media (max-width: 800px) {
    font-size: 47px;
    font-weight: bold;
  }
`;

const Description = styled.div`
  font-size: 12px;
  margin-left: 20px;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    width: 250px;
  }
`;

const ReadMore = styled.button`
  width: 100px;
  height: 40px;
  margin-left: auto;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #20b2aa;
  color: #ffffff;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const Three = () => {
  return (
    <Container>
      <Title>Who Use Pindle ?</Title>
      <Description>
        Pin your adventures and oraganize all your photos in a better way
        <br />
        by sharing location, time and date along with category filters.
        <br />
        Find the pictures you wnat in a flash.
      </Description>
      <Card />
      <ReadMore>Read More</ReadMore>
    </Container>
  );
};
