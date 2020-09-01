import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";
import { Apply } from "../components/Apply";

const Profile = [
  {
    image: "/img/001.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/002.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/003.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/004.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/005.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
  },
  {
    image: "/img/006.jpg",
    name: "James Lucian",
    tag: "#FaroeIslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to Iceland without.... ",
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
  margin-top: 100px;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  @media (max-width: 800px) {
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
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
      <AmbassadorsHeader>AMBASSADORS</AmbassadorsHeader>
      <Container>
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
        <Title>Make a difference at pindle from anywhere in the world.</Title>
        <Description>
          We are looking for talented and independant
          <br />
          individuals to be a part of our Ambassador Crew.
          <br />
          Are you someone who loves travelling
          <br />
          and curating your own travel content?
        </Description>
        <Apply />
      </Container>
    </>
  );
};
