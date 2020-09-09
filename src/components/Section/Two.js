import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const list = [
  {
    image: "/img/ths301.jpg",
    title: "Your adventure awaits !!",
  },
  {
    image: "/img/ths302.jpg",
    title: "Browse",
    direction:
      "There are hidden gems across the world and in your own neighborhood that are waiting to be discovered by you!",
  },
  {
    image: "/img/ths303.jpg",
    title: "Filter",
    direction: "Content-Specific catergories based on your interests!",
  },
  {
    image: "/img/ths304.jpg",
    title: "Search",
    direction:
      "Not sure what to look for? Why not check out the latest hotspots and trending hashtags!",
  },
  {
    image: "/img/ths305.jpg",
    title: "Pin",
    direction:
      "Customise your location? Adding to your Favourites list? Make your post private? You can do it all! ",
  },
  {
    image: "/img/ths306.jpg",
    title: "Capture",
    direction:
      "Be it uploading an old picture or taking new photos, The picture’s location will be automatically pinned on the map via geotagging!",
  },
  {
    image: "/img/ths307.jpg",
    title: "Share",
    direction:
      "Share your stories with your friends!",
  },
];

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 330px;
  padding: 0px 20px;
  @media (min-width: 801px) {
    display: none;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #000066;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 0px;
  }
`;

const SliderContainer = styled.div`
  text-align: center;
`;

const SliderItem = styled.div`
  :focus {
    outline: none;
  }
`;

const SliderImg = styled.img`
  width: 200px;
  margin: 0 auto;
`;

const SliderTitle = styled.div`
  margin: 0 auto;
  color: rgb(0, 0, 102);
  font-size: 20px;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 120px;
`;

const SliderDescription = styled.div`
  margin: 0 auto;
  width: 200px;
  font-size: 12px;
`;

const LeftArrow = styled.div`
  background-image: url("/img/Arrow.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  top: 226px;
  cursor: pointer;
  left: -90px;
`;

const RightArrow = styled.div`
  background-image: url("/img/ArrowRight.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  left: 1320px;
  bottom: 360px;
  cursor: pointer;
  z-index: -10;
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: -100,
        width: 50,
        height: 50,
        top: "38%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: -100,
        width: 50,
        height: 50,
        top: "38%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const MobileLeftArrow = styled.div`
  background-image: url("/img/Arrow.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  top: 225px;
  cursor: pointer;
  left: 10px;
`;

const MobileRightArrow = styled.div`
  background-image: url("/img/ArrowRight.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  left: 305px;
  bottom: 360px;
  cursor: pointer;
  z-index: -1;
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: 0,
        width: 50,
        height: 50,
        top: "38%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: 0,
        width: 50,
        height: 50,
        top: "38%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: "1000",
      }}
      onClick={onClick}
    />
  );
};

export const Two = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  };

  var setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
  };
  return (
    <>
      <Container>
        <Title>Mapping Moments</Title>
        <LeftArrow></LeftArrow>
        <SliderContainer>
          <Slider {...settings} style={{ outline: "none" }}>
            {list.map((l) => (
              <SliderItem>
                <SliderImg src={l.image} alt="logo" />
                <SliderTitle>{l.title}</SliderTitle>
                <SliderDescription>{l.direction}</SliderDescription>
              </SliderItem>
            ))}
          </Slider>
        </SliderContainer>
        <RightArrow></RightArrow>
      </Container>
      <MobileContainer>
        <Title>Mapping Moments</Title>
        <MobileLeftArrow />
        <SliderContainer>
          <Slider {...setting} style={{ outline: "none", border: "none" }}>
            {list.map((l) => (
              <SliderItem>
                <SliderImg src={l.image} alt="logo" />
                <SliderTitle>{l.title}</SliderTitle>
                <SliderDescription>{l.direction}</SliderDescription>
              </SliderItem>
            ))}
          </Slider>
        </SliderContainer>
        <MobileRightArrow />
      </MobileContainer>
    </>
  );
};
