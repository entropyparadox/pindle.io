import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const backgroundImage = [
  {
    image: "/img/0.jpg",
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
  height: 1000px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 750px 0px 0px 0px;
  @media (max-width: 800px) {
    padding: 600px 0px 0px 20px;
    height: 800px;
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
    font-size: 60px;
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
  width: 35px;
  height: 35px;
  @media (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const Slider = () => {
  return (
    <div>
      <Carousel controls={false} indicators={false} interval={700}>
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
                  <AppLogo src="/img/apple_logo.svg" alt="logo" />
                  <AppLogo src="/img/google_logo.svg" alt="logo" />
                </LogoBox>
              </SlideTitleBox>
            </SlideImage>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
