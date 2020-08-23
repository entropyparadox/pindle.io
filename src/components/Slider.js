import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const backgroundImage = [
  {
    image: "/img/11.jpg",
  },
  {
    image: "/img/1.jpg",
  },
  {
    image: "/img/2.jpg",
  },
  {
    image: "/img/3.jpg",
  },
  {
    image: "/img/4.jpg",
  },
  {
    image: "/img/5.jpg",
  },
  {
    image: "/img/6.jpg",
  },
  {
    image: "/img/7.jpg",
  },
  {
    image: "/img/8.jpg",
  },
  {
    image: "/img/9.jpg",
  },
];

const SlideImage = styled.div`
  background-image: url(${(props) => props.imgUrl});
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 65vh 0px 70px 0px;
  @media (max-width: 800px) {
    height: 100vh;
    padding: 65vh 0px 0px 20px;
  }
  @media (max-width: 400px) {
    height: 100vh;
    padding: 70vh 0px 0px 20px;
  }
`;

const SlideTitleBox = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`;

const MainTitle = styled.div`
  font-size: 80px;
  color: #fff;
  line-height: 85px;
  @media (max-width: 800px) {
    font-size: 52px;
    font-weight: 600;
    line-height: 65px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: #fff;
  @media (max-width: 800px) {
    font-size: 12px;
    width: 250px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  width: 80px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  @media (max-width: 800px) {
    width: 70px;
  }
`;

const AppLogo = styled.img`
  width: 150px;
  margin-right: 16px;
  
  @media (max-width: 800px) {
    width: 140px;
    margin-right: 8px;
  }
`;

export const Slider = () => {
  return (
    <div>
      <Carousel controls={false} indicators={false} interval={2500}>
        {backgroundImage.map((i) => (
          <Carousel.Item>
            <SlideImage imgUrl={i.image}>
              <SlideTitleBox>
                <MainTitle>WHERE ?</MainTitle>
                <SubTitle>
                  Pindle's data platform connects people by their experiences
                  and
                  <br />
                  interests - by pinning photo to a map.
                </SubTitle>
                <LogoBox>
                  <a href="https://apps.apple.com/kr/app/pindle/id1523281916"><AppLogo src="/img/apple_logo.svg" alt="logo" target="_blank"/></a>
                  <a href="https://play.google.com/store/apps/details?id=co.pindle.travel"><AppLogo src="/img/google_logo.svg" alt="logo" target="_blank"/></a>
                </LogoBox>
              </SlideTitleBox>
            </SlideImage>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
