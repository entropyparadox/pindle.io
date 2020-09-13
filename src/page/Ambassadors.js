import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";
import { Apply } from "../components/Apply";

const Profile = [
  {
    image: "/img/a01.jpg",
    name: "bahadirsansarci",
    tag: "#nature #life #photography #scenery #travel #wildlife",
    description: "And the light shines in the darkness / Et lux in tenebris lucet",
  },
  {
    image: "/img/0004.jpg",
    name: "Alejandro BS",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "Pete Elliott",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "Himalayandrives",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "Adrien",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "hajducakmarek",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "imroamingtheearth",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
    {
      image: "/img/0004.jpg",
      name: "a.dunkel",
      tag: "#FaroeIslands #Iceland #Norway",
      description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
    },
  {
    image: "/img/0004.jpg",
    name: "julienduvalphoto",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "fueradeejeblog",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "jameslucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },

  {
    image: "/img/0004.jpg",
    name: "Dhana_Dee - Indonesian 🇮🇩",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "Marcin",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "Lee Seung Tae",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/0004.jpg",
    name: "park dong sik",
    tag: "#FaroeIslands #Iceland #Norway",
    description: "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },

  
];


const AmbassadorsHeader = styled.div`
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
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 60px;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    display: block;
  }
`;

const ProfileBox = styled.div`
  width: 190px;
  border: 1px solid #ebebeb;
  text-align: center;
  padding: 30px 20px;
  box-sizing: border-box;
  box-shadow: 5px 5px 30px rgba(68, 68, 68, 0.2);
  margin-bottom: 20px;
  @media (max-width: 800px) {
    margin: 0 auto;
    padding: 0 auto;
    margin-bottom: 30px;
  }
  @media (min-width: 801px) {
    margin-right: 20px;
    :nth-child(6n) {
      margin-right: 0px;
    }
  }
`;

const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 10px 0px;
`;

const ProfileTag = styled.div`
  color: #b0b0b0;
  font-size: 8px;
  text-align: center;
`;

const ProfileDexcription = styled.div`
  font-size: 8px;
  text-align: center;
  font-weight: bold;
`;

const Title = styled.div`
  color: #000044;
  font-size: 22px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
`;

export const Ambassadors = () => {
  return (
    <>
      <DetailHeader />
      <AmbassadorsHeader>WORK WITH US</AmbassadorsHeader>
      <Container>
      <Title>Meet some of Pindle’s Global Brand Ambassadors </Title>
        <ProfileContainer>
          {Profile.map((p) => (
            <ProfileBox>
              <ProfileImg src={p.image} alt="img" />
              <ProfileName>{p.name}</ProfileName>
              <ProfileTag>{p.tag}</ProfileTag>
              <hr style={{ width: 140, margin: "25px auto" }} />
              <ProfileDexcription>{p.description}</ProfileDexcription>
            </ProfileBox>
          ))}
        </ProfileContainer>
        <Title>Make a Difference from Anywhere</Title>
        <Description>
          If you: 
          <br />love travelling to a range of exotic destinations, 
          <br />loving snapping pictures 
          <br />have an eye for re-discovering hidden gems. 
          <br />well-versed in the digital world 
          <br />thrive on social media platforms.
          <br /><br />
          <br />If this sounds like you, we would love to have you onboard Pindle’s exclusive Brand Ambassador Program!
          <br /><br />
          <br />Here are just a few of the benefits of joining this program:
          <br />1. Attractive Cash Rewards
          <br />2. Sponsored Trips
          <br />3. Exclusive Invites
          <br />4. Being a core part of the next big social media platform
        </Description>
        <Apply />
      </Container>
    </>
  );
};
