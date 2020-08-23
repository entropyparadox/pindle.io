import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 800px) {
    margin-top: 330px;
    padding: 0px 20px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #000066;
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 80px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileImageBox = styled.div`
  padding: 0px 20px;
  width: 100%;
  text-align: center;
  @media (min-width: 800px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 200px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100px;
    margin-right: 20px;
  }
`;

const MobileImages = styled.img`
  width: 150px;
  margin-bottom: 30px;
  @media (min-width: 800px) {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1155px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Category = styled.span`
  width: 110px;
  text-align: center;
  color: #000066;
  font-size: 20px;
  font-weight: 400;
`;

const MobileCategory = styled.div`
  color: #000066;
  font-size: 22px;
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Line = styled.hr`
  width: 120px;
  border: 1px solid #bebebe;
  @media (max-width: 800px) {
    width: 30px;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 1285px;
  margin: 0 auto;
  margin-bottom: 100px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Description = styled.span`
  text-align: center;
  font-size: 12px;
`;

const MobileDescription = styled.div`
  text-align: center;
  font-size: 12px;
  margin-bottom: 50px;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Two = () => {
  return (
    <>
      <Container>
        <Title>How it work</Title>
        <ImageBox>
          <MobileImage src="/img/section3_01.jpg" alt="logo" />
          <MobileImage src="/img/section3_02.jpg" alt="logo" />
          <MobileImage src="/img/section3_03.jpg" alt="logo" />
          <MobileImage src="/img/section3_04.jpg" alt="logo" />
          <MobileImage src="/img/section3_05.jpg" alt="logo" />
        </ImageBox>
        <TextBox>
          <Category>Capture</Category>
          <Line />
          <Category>Pin</Category>
          <Line />
          <Category>Share</Category>
          <Line />
          <Category>Categories</Category>
          <Line />
          <Category>
            Discover
            <br />
            and
            <br />
            re-discover
          </Category>
        </TextBox>
      </Container>
      <DescriptionBox>
        <Description style={{ marginRight: 80 }}>
          Take any picture with the
          <br />
          Pindle camera - your surroundings, your
          <br />
          favorite corner, anything!
        </Description>
        <Description style={{ marginRight: 105 }}>
          Your picture will be
          <br />
          automatically pinned on the
          <br />
          map via geotagging!
        </Description>
        <Description style={{ marginRight: 65 }}>
          Share your stories and pins
          <br />
          with your friends!
        </Description>
        <Description>
          Choose the categories you want to explore!
          <br />
          The categories include Culture, Food & Drink,
          <br />
          Shopping, Nature, Lodging, Leisure.
        </Description>
        <Description>
          Discover untold stories and hidden
          <br />
          attractions on the Pindle app.
          <br />
          Re-discover a street you’ve been ignoring.
        </Description>
      </DescriptionBox>

      <MobileImageBox>
        <MobileImages src="/img/section3_01.jpg" alt="logo"></MobileImages>
        <MobileCategory>Capture</MobileCategory>
        <Line />
        <MobileDescription>
          Take any picture with the
          <br />
          Pindle camera - your surroundings, your
          <br />
          favorite corner, anything!
        </MobileDescription>
      </MobileImageBox>

      <MobileImageBox>
        <MobileImages src="/img/section3_02.jpg" alt="logo"></MobileImages>
        <MobileCategory>Pin</MobileCategory>
        <Line />
        <MobileDescription>
          Your picture will be
          <br />
          automatically pinned on the
          <br />
          map via geotagging!
        </MobileDescription>
      </MobileImageBox>

      <MobileImageBox>
        <MobileImages src="/img/section3_03.jpg" alt="logo"></MobileImages>
        <MobileCategory>Share</MobileCategory>
        <Line />
        <MobileDescription>
          Share your stories and pins
          <br />
          with your friends!
        </MobileDescription>
      </MobileImageBox>

      <MobileImageBox>
        <MobileImages src="/img/section3_04.jpg" alt="logo"></MobileImages>
        <MobileCategory>Categories</MobileCategory>
        <Line />
        <MobileDescription>
          Choose the categories you want to explore!
          <br />
          The categories include Culture, Food & Drink,
          <br />
          Shopping, Nature, Lodging, Leisure.
        </MobileDescription>
      </MobileImageBox>

      <MobileImageBox>
        <MobileImages src="/img/section3_05.jpg" alt="logo"></MobileImages>
        <MobileCategory>
          Discover
          <br />
          and
          <br />
          re-discover
        </MobileCategory>
        <Line />
        <MobileDescription>
          Discover untold stories and hidden
          <br />
          attractions on the Pindle app.
          <br />
          Re-discover a street you’ve been ignoring.
        </MobileDescription>
      </MobileImageBox>
    </>
  );
};
