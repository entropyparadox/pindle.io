import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";

const Profile = [
  {
    image: "/img/자산 16@3x-100.jpg",
    position: "CEO / Founder",
    name: "Kang kei kim",
  },
  {
    image: "/img/자산 13@3x-100.jpg",
    position: "Creative",
    name: "Mijin Kim",
  },
  {
    image: "/img/자산 14@3x-100.jpg",
    position: "Marketing",
    name: "Dominic Phua",
  },
  {
    image: "/img/자산 11@3x-100.jpg",
    position: "Business Development",
    name: "Jason Chung",
  },
  {
    image: "/img/자산 15@3x-100.jpg",
    position: "Tech / Development",
    name: "Khris Kang",
  },
  {
    image: "/img/자산 12@3x-100.jpg",
    position: "Design",
    name: "Nicole Leaw",
  },
];

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const AboutHeader = styled.div`
  background: #ebebeb;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #000044;
  margin-top: 60px;
`;

const Title = styled.div`
  color: #000044;
  font-size: 32px;
  text-align: center;
  margin-top: 100px;
  @media (max-width: 800px) {
    margin-top: 40px;
    font-size: 28px;
  }
`;

const Titles = styled.div`
  color: #000044;
  font-size: 32px;
  text-align: center;
  margin-top: 50px;
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

const Line = styled.hr`
  width: 60px;
  background: rgba(0, 0, 0, 0.35);
  margin: 35px auto;
`;

const Description = styled.div`
  color: #666;
  font-size: 14px;
  text-align: center;
  @media (max-width: 800px) {
    text-align: left;
    margin: 0 1.4rem;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #000044;
  font-size: 24px;
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

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 130px;

  @media (max-width: 800px) {
    display: block;
  }
`;

const ProfileBox = styled.div`
  width: 180px;
  height: 280px;
  border: 1px solid #ebebeb;
  text-align: center;
  padding: 30px 20px;
  box-sizing: border-box;
  box-shadow: 5px 5px 30px rgba(68, 68, 68, 0.1);
  @media (max-width: 800px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
`;

const ProfilePosition = styled.div`
  color: #000044;
  font-size: 16px;
  text-align: center;
`;

const ProfileName = styled.div`
  font-size: 12px;
  text-align: center;
  color: #666;
`;

export const About = () => {
  return (
    <>
      <DetailHeader />
      <AboutHeader>ABOUT</AboutHeader>
      <Container>
        <Title>The Flow of Time</Title>
        <Line />
        <Description>
          Pindle was founded with the vision to Record Time on the Map.
        </Description>
        <Titles>About Pindle</Titles>
        <Line />
        <Description>

        Pindle is a photography and social mobile app for iOS and Android devices. <br />
        The travel themed social platform allows its users to capture, <br />
        pin and share moments as photographs on the world map. 
        </Description>
        <TeamMembers>Meet the Team</TeamMembers>
        <ProfileContainer>
          {Profile.map((p) => (
            <ProfileBox>
              <ProfileImg src={p.image} alt="img" />
              <hr style={{ width: 100, margin: "35px auto" }} />
              <ProfilePosition>{p.position}</ProfilePosition>
              <ProfileName>{p.name}</ProfileName>
            </ProfileBox>
          ))}
        </ProfileContainer>
      </Container>
    </>
  );
};
