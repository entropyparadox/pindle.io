import React from "react";
import styled from "styled-components";
import { Card } from "../card";

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 160px;
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #000066;
  font-size: 54px;
  font-weight: 900;
  text-align: center;
  margin-left: 20px;
  @media (max-width: 800px) {
    font-size: 32px;
    font-weight: 900;
    margin: 0 3rem;
    line-height: 2rem;
  }
`;

const Description = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    font-size: 11px;
    margin: 1rem 1rem;
  }
`;

const ReadMore = styled.button`
  width: 120px;
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
  margin-right: 10px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const Three = () => {
  return (
    <Container>
      <Title>Here’s what our users are saying</Title>
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
