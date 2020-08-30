import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";
import { Apply } from "../components/Apply";

const Logo = [
  {
    image: "/img/자산 1@3x-100.jpg",
  },
  {
    image: "/img/자산 2@3x-100.jpg",
  },
  {
    image: "/img/자산 3@3x-100.jpg",
  },
  {
    image: "/img/자산 4@3x-100.jpg",
  },
  {
    image: "/img/자산 5@3x-100.jpg",
  },
  {
    image: "/img/자산 6@3x-100.jpg",
  },
  {
    image: "/img/자산 7@3x-100.jpg",
  },
  {
    image: "/img/자산 8@3x-100.jpg",
  },
  {
    image: "/img/자산 9@3x-100.jpg",
  },
  {
    image: "/img/자산 10@3x-100.jpg",
  },
];

const PartnersHeader = styled.div`
  background: #ebebeb;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #000044;
  margin-top: 60px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const Title = styled.div`
  color: #000044;
  font-size: ${(props) => (props.main ? "32px" : "22px")};
  text-align: center;
  margin-top: ${(props) => (props.first ? "100px" : "0px")};
  margin-bottom: ${(props) => (props.main ? "30px" : "20px")};
`;

const Description = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

const LogoBox = styled.div`
  text-align: center;
  width: 680px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const LogoImg = styled.img`
  width: 60px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const System = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #000044;
  font-size: 18px;
  margin-top: 120px;
  margin-bottom: 45px;
  ::before {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 50px 0px 0px;
  }
  ::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 0px 0px 50px;
  }
  @media (max-width: 800px) {
    ::before {
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      font-size: 0px;
      line-height: 0px;
      margin: 0px 20px 0px 0px;
    }
    ::after {
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      font-size: 0px;
      line-height: 0px;
      margin: 0px 0px 0px 20px;
    }
  }
`;

export const Partners = () => {
  return (
    <>
      <DetailHeader />
      <PartnersHeader>PARTNERS</PartnersHeader>
      <Container>
        <Title first main>
          We are looking for our partners.
        </Title>
        <Description>
          We have curated a list of select NGOs that have partnered with us.
          <br />
          Clicking on the badge will also bring the user straight to your
          website, social media or donation page.
          <br />
          Having your company’s badge featured will bring more publicity to your
          organization and awareness for your cause.
          <br />
          To be featured in our list,please apply below or send us an email at
          hr@pindle.io.
        </Description>
        <LogoBox>
          {Logo.map((l) => (
            <LogoImg src={l.image} alt="logo" />
          ))}
        </LogoBox>
        <Title main>How we can help our partners?</Title>
        <Description>
          At Pindle, we would like to partner with NGOs across the globe to give
          back to the community and the environment.
          <br />
          Whenever a user posts a picture, they are able to select up to 5 NGOs
          that they would like to support or feature.
          <br />
          After adding the badge onto their post, a list of NGOs that have
          partnered with us would appear.
          <br />
          From this list, the user is able to select up to five organizations of
          h is/her choosing.
        </Description>
        <System>Findle's badge system</System>
        <img
          src="/img/1111.png"
          alt="img"
          style={{ width: "100%", marginBottom: 80 }}
        />
        <Title>Join pindle’s global partner network</Title>
        <Description>
          Come work in partnership with Pindle to create incredible
          <br />
          mission-first personalised experiences. Join Pindle’s Partner Program
          today
          <br />
          and let’s be successful together. Media enquiries are also welcomed.
        </Description>
        <Apply />
      </Container>
    </>
  );
};
