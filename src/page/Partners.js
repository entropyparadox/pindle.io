import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";
import { Apply } from "../components/Apply";

const Logo = [
  // {
  //   image: "/img/자산 1@3x-100.jpg",
  // },
  {
    image: "/img/자산 2@3x-100.jpg",
  },
  // {
  //   image: "/img/자산 3@3x-100.jpg",
  // },
  // {
  //   image: "/img/자산 4@3x-100.jpg",
  // },
  // {
  //   image: "/img/자산 5@3x-100.jpg",
  // },
  // {
  //   image: "/img/자산 6@3x-100.jpg",
  // },
  // {
  //   image: "/img/자산 7@3x-100.jpg",
  // },
  {
    image: "/img/자산 8@3x-100.jpg",
  },
  // {
  //   image: "/img/자산 9@3x-100.jpg",
  // },
  // {
  //   image: "/img/자산 10@3x-100.jpg",
  // },
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
  @media (max-width: 800px) {
    font-size: 28px;
    font-weight: 600;
    margin-top: 4rem;
  }
`;

const Description = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 13px;
  }
`;

const LogoBox = styled.div`
  text-align: center;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    width: 50%;
    flex-wrap: wrap;
  }
`;

const LogoImg = styled.img`
  width: 100px;
  @media (max-width: 800px) {
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
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

const ImageBox = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const Partners = () => {
  return (
    <>
      <DetailHeader />
      <PartnersHeader>PARTNERS</PartnersHeader>
      <Container>
        <Title first main>
          Who are we looking for?
        </Title>
        <Description>
          Is your organisation an NGO? <br />
          If your answer is yes, we would love to partner with you!
        </Description>
        <LogoBox>
          {Logo.map((l) => (
            <LogoImg src={l.image} alt="logo" />
          ))}
        </LogoBox>
        <Title main>Why partner with us? </Title>
        <Description>
          We would like to feature your organisation on our cafelly curated NGO
          Badge List! <br />
          Having your company’s badge featured will bring more publicity to your
          organization and awareness for your cause. <br />
          <br />
          The best part is? <br />
          It’s all free!
          <br />
          We are not looking for anything in return. <br />
          <br />
          At Pindle, we always believe in giving back to the world & community.{" "}
          <br />
          <br />
        </Description>
        <Title main>How does the N.G.O Badge List work?</Title>
        <Description>
          Whenever a user posts a picture, they are able to select up to 5 NGOs
          that they would like to support or feature in their post.
          <br />
          After adding the badge onto their post, a list of NGOs that have
          partnered with us would appear.
          <br />
          From this list, the user is able to select up to five organizations of
          his/her choosing to be added as badges.
          <br />
          Anyone who clicks on the badge will be brought straight to your
          website, social media or donation page.
          <br />
          <br />
        </Description>

        <ImageBox>
          <div>
            <img
              src="/img/p04.png"
              alt="img"
              style={{ width: "100%", marginBottom: 40, padding: "1rem" }}
            />
          </div>
          <div>
            <img
              src="/img/p05.png"
              alt="img"
              style={{ width: "100%", marginBottom: 40, padding: "1rem" }}
            />
          </div>
          <div>
            <img
              src="/img/p06.png"
              alt="img"
              style={{ width: "100%", marginBottom: 80, padding: "1rem" }}
            />
          </div>
        </ImageBox>

        <Title>Join our Global Partner Program </Title>
        <Description>
          If this all sounds awesome to you, we invite you to apply for Pindle’s
          Partner Program today. <br />
          Simply fill in the form below and a representive from Pindle will be
          in touch shortly!
        </Description>
        <Apply />
      </Container>
    </>
  );
};
