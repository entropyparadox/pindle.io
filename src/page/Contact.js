import React from "react";
import { DetailHeader } from "../components/DetailHeader";
import styled from "styled-components";

const ContactHeader = styled.div`
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

const Box = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;

const CardBox = styled.div`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  box-shadow: 0px 20px 50px rgba(103, 103, 103, 0.2);
  width: 300px;
  height: 550px;
  padding: 60px 20px;
  text-align: center;
  @media (max-width: 800px) {
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  width: 70px;
`;

const Title = styled.div`
  font-size: 32px;
  color: #000044;
  margin: 10px 0px 30px;
`;

const Description = styled.div`
  color: #666;
  font-size: 10px;
  text-align: center;
`;

const LogoBox = styled.div`
  margin: 10px 0px 50px;
`;

const Logos = styled.img`
  width: 35px;
  margin-right: ${(props) => (props.ok ? "5px" : "0px")};
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #000044;
`;

const EmailBox = styled.div`
  border: 1px solid #cfcfcf;
  width: 170px;
  height: 70px;
  margin: 0 auto;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px 0px;
`;

const EmailTitle = styled.div`
  font-size: 14px;
`;

const Email = styled.div`
  font-size: 12px;
  color: #777;
`;

const Address = styled.div`
  font-size: 22px;
  color: #000044;
  margin-top: 70px;
  margin-bottom: 10px;
`;

const AddressText = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 50px;
`;

const Tel = styled.div`
  font-size: 16px;
  color: #777;
`;

const Locate = styled.div`
  color: #000044;
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
`;

const LocateImg = styled.img`
  width: 300px;
`;

const LocateText = styled.div`
  color: #777;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const Contact = () => {
  return (
    <>
      <DetailHeader />
      <ContactHeader>CONTACT</ContactHeader>
      <Container>
        <Box>
          <CardBox>
            <Logo src="/img/010.svg" />
            <Title>Talk to Us</Title>
            <Description>
              Interested in following what we do?
              <br />
              Have a quick question to ask?
              <br />
              Shoot us an email or find us
              <br />
              on social media.
            </Description>
            <LogoBox>
              <Logos src="/img/insta.svg" alt="logo" ok />
              <Logos src="/img/facebook.svg" alt="logo" ok />
              <Logos src="/img/mail.svg" alt="logo" />
            </LogoBox>
            <SubTitle>Drop us a message</SubTitle>
            <EmailBox>
              <EmailTitle>E-mail</EmailTitle>
              <Email>0000@pindle.com</Email>
            </EmailBox>
          </CardBox>
          <CardBox>
            <Logo src="/img/011.svg" />
            <Title>Talk to Us</Title>
            <Address>ADDRESS</Address>
            <AddressText>
              13 Hakdong-ro 50-gil,
              <br />
              Nonhyeon 2-dong Seoul, Korea
            </AddressText>
            <Address>TEL</Address>
            <Tel>+82 02 000 000</Tel>
          </CardBox>
        </Box>
        <Locate>Locate</Locate>
        <div style={{ textAlign: "center" }}>
          <LocateImg src="/img/locate.png" alt="img" />
        </div>
        <LocateText>
          13 Hakdong-ro 50-gil,
          <br />
          Nonhyeon 2-dong Seoul, Korea
        </LocateText>
      </Container>
    </>
  );
};
