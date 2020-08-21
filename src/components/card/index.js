import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
    padding: 0px 20px;
  }
`;

const CardBox = styled.div`
  border: 1px solid #ebebeb;
  padding: 30px;
  width: 270px;
  height: 520px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  margin-bottom: 50px;
  @media (max-width: 800px) {
    margin: 0 auto;
    height: 450px;
    width: 250px;
    margin-bottom: 50px;
  }
`;

const Profile = styled.img`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 18px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const Tag = styled.div`
  font-size: 10px;
  color: #bebebe;
  margin-bottom: 25px;
  @media (max-width: 800px) {
    margin-bottom: 20px;
    font-size: 8px;
  }
`;

const Description = styled.div`
  font-weight: bold;
  font-size: 12px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

const Line = styled.hr`
  background: #bebebe;
  margin: 35px 0px 25px;
  @media (max-width: 800px) {
    margin: 25px 0px 15px;
  }
`;

const Star = styled.div`
  margin-bottom: 15px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const Story = styled.div`
  font-size: 8px;
`;

export const Card = () => {
  return (
    <Container>
      <CardBox>
        <Profile
          src="https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3634&q=80"
          alt="img"
        ></Profile>
        <Name>James Lucian</Name>
        <Tag>#Faroelslands #Iceland #Norway</Tag>
        <Description>
          Already a child when learning the European capitals, John was drawn to
          iceland whithout....
        </Description>
        <Line />
        <Star>⭐️⭐️</Star>
        <Story>
          At first, I couldnt undrstand how to use it, <br />
          but the more one used Pindle,
          <br />
          the more you realise what a useful app this is! Imagine going to a
          foreign country
          <br />
          and not knowing the language,
          <br />
          this app allows you to instantly record places
          <br />
          you have been!
        </Story>
      </CardBox>
      <CardBox>
        <Profile
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="img"
        ></Profile>
        <Name>Samuel</Name>
        <Tag>#Turkey #India # Thailand</Tag>
        <Description>
          Already a child when learning the European capitals, John was drawn to
          iceland whithout....
        </Description>
        <Line />
        <Star>⭐️⭐️⭐️⭐️</Star>
        <Story>
          At first, I couldnt undrstand how to use it, <br />
          but the more one used Pindle,
          <br />
          the more you realise what a useful app this is! Imagine going to a
          foreign country
          <br />
          and not knowing the language,
          <br />
          this app allows you to instantly record places
          <br />
          you have been!
        </Story>
      </CardBox>
      <CardBox>
        <Profile
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="img"
        ></Profile>
        <Name>Alexandria</Name>
        <Tag>#Faroelslands #Iceland #Norway</Tag>
        <Description>
          Already a child when learning the European capitals, John was drawn to
          iceland whithout....
        </Description>
        <Line />
        <Star>⭐️⭐️⭐️⭐️⭐️</Star>
        <Story>
          At first, I couldnt undrstand how to use it, <br />
          but the more one used Pindle,
          <br />
          the more you realise what a useful app this is! Imagine going to a
          foreign country
          <br />
          and not knowing the language,
          <br />
          this app allows you to instantly record places
          <br />
          you have been!
        </Story>
      </CardBox>
      <CardBox>
        <Profile
          src="https://images.unsplash.com/photo-1545912453-db258ca9b7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="img"
        ></Profile>
        <Name>Liam</Name>
        <Tag>#Faroelslands #Iceland #Norway</Tag>
        <Description>
          Already a child when learning the European capitals, John was drawn to
          iceland whithout....
        </Description>
        <Line />
        <Star>⭐️⭐️⭐️</Star>
        <Story>
          At first, I couldnt undrstand how to use it, <br />
          but the more one used Pindle,
          <br />
          the more you realise what a useful app this is! Imagine going to a
          foreign country
          <br />
          and not knowing the language,
          <br />
          this app allows you to instantly record places
          <br />
          you have been!
        </Story>
      </CardBox>
    </Container>
  );
};
