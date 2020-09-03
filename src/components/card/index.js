import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const cardlist = [
  {
    image: "/img/0001.jpg",
    name: "James Lucian",
    tag: "#Faroelslands #Iceland #Norway",
    description:
      "Already a child when learning the European capitals, John was drawn to iceland whithout....",
    star: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "At first, I couldnt undrstand how to use it,but the more one used Pindle,the more you realise what a useful app this is! Imagine going to a foreign country and not knowing the language, this app allows you to instantly record places you have been!",
  },
  {
    image: "/img/0002.jpg",
    name: "Samuel",
    tag: "#Turkey #India # Thailand",
    description:
      "I decided to travel to Turkey to celebrate my 3rd wedding anniversary. I stayed there because I had an acquaintance in Turkey..",
    star: "⭐️⭐️⭐️⭐️",
    review:
      "This feels like Google Maps + Instagram! The geotagging and map feature of google maps combined with the social aspect of Instagram!",
  },
  {
    image: "/img/0003.jpg",
    name: "Alexandria",
    tag: "#United Stated #Canada # Brazil",
    description:
      "Traveling in America was an opportunity to realize that the world was wide and that one should live hard.",
    star: "⭐️⭐️⭐️⭐️",
    review:
      "More convenient than Instagram! It's easy to see where you've traveled. And it can be easily recorded. It's a great app than anything else.",
  },
  {
    image: "/img/0004.jpg",
    name: "Liam",
    tag: "#Japan #China # Korea",
    description:
      "So I'm going to write a short trip to Taiwan for 3 nights and four days. It's my first time visiting Taiwan. This is my third visit because I have traveled to Taipei and Kaohsiung.",
    star: "⭐️⭐️⭐️⭐️⭐️",
    review:
      "I feel like I have traveled to various places.With this app, you can enjoy not only tourist attractions, but also restaurants, shopping and culture. You can travel around the world, even to lesser-known areas. Anyone who likes to travel should definitely install this app.",
  },
];

const Container = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  margin: 0 auto;
  width: 230px;
  @media (min-width: 801px) {
    display: none;
  }
`;

const CardBox = styled.div`
  border: 1px solid #ebebeb;
  padding: 30px;
  height: 550px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 5px 5px 30px rgba(68, 68, 68, 0.03);
  margin-bottom: 50px;
  margin-left: 10px;
  margin-right: 10px;
  :focus {
    outline: none;
  }
  @media (max-width: 800px) {
    margin: 0 auto;
    // height: 450px;
    width: 230px !important;
    margin-bottom: 50px;
  }
  @media (min-width: 801px) {
    width: 290px !important;
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
  font-weight: 400;
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
  font-weight: 400;
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

const LeftArrow = styled.div`
  background-image: url("/img/Arrow.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  top: 300px;
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
  bottom: 300px;
  cursor: pointer;
  z-index: -1;
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
        top: "50%",
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
        top: "50%",
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
  top: 265px;
  cursor: pointer;
  left: -50px;
`;

const MobileRightArrow = styled.div`
  background-image: url("/img/ArrowRight.svg");
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  position: relative;
  left: 260px;
  bottom: 265px;
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
        right: -55,
        width: 40,
        height: 40,
        top: "50%",
        transform: "translateY(-50%)",
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
        left: -55,
        width: 40,
        height: 40,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    />
  );
};
export const Card = () => {
  var settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  };

  var setting = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
  };
  return (
    <>
      <Container>
        <LeftArrow />
        <div>
          <Slider {...settings}>
            {cardlist.map((card) => (
              <CardBox>
                <Profile src={card.image} />
                <Name>{card.name}</Name>
                <Tag>{card.tag}</Tag>
                <Description>{card.description}</Description>
                <Line />
                <Star>{card.star}</Star>
                <Story>{card.review}</Story>
              </CardBox>
            ))}
          </Slider>
        </div>
        <RightArrow />
      </Container>
      <MobileContainer>
        <MobileLeftArrow />
        <div>
          <Slider {...setting}>
            {cardlist.map((card) => (
              <CardBox>
                <Profile src={card.image} />
                <Name>{card.name}</Name>
                <Tag>{card.tag}</Tag>
                <Description>{card.description}</Description>
                <Line />
                <Star>{card.star}</Star>
                <Story>{card.review}</Story>
              </CardBox>
            ))}
          </Slider>
        </div>
        <MobileRightArrow />
      </MobileContainer>
    </>
  );
};
