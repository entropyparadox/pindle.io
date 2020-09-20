import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 70px;
`;

const Title = styled.div`
  background: #000055;
  width: 400px;
  height: 40px;
  color: #ffffff;
  font-size: 26px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

// const FromBox = styled.div`
//   border: 1px solid #e0e0e0;
//   width: 400px;
//   margin: 0 auto;
//   box-sizing: border-box;
//   padding: 20px;
//   box-shadow: 5px 5px 30px rgba(68, 68, 68, 0.2);
//   margin-bottom: 100px;
//   @media (max-width: 800px) {
//     width: 100%;
//   }
// `;

// const Box = styled.div`
//   display: flex;
// `;

// const FromInput = styled.input`
//   border-radius: 12px;
//   border: 1px solid #efefef;
//   margin-right: ${(props) => (props.left ? "10px" : "0px")};
//   height: 40px;
//   box-sizing: border-box;
//   padding: 5px 8px;
//   width: 100%;
//   margin-bottom: 10px;
//   font-size: 14px;
//   outline: none;
//   @media (max-width: 800px) {
//     font-size: 11px;
//     padding: 2px 5px;
//   }
// `;

// const FromText = styled.textarea`
//   width: 100%;
//   border: 1px solid #efefef;
//   border-radius: 12px;
//   box-sizing: border-box;
//   outline: none;
//   padding: 5px 7px;
//   @media (max-width: 800px) {
//     font-size: 11px;
//     padding: 5px 5px;
//   }
// `;

// const Send = styled.button`
//   width: 150px;
//   height: 30px;
//   border-radius: 20px;
//   border: none;
//   background: #000055;
//   color: #fff;
//   margin-top: 30px;
//   font-size: 12px;
//   @media (max-width: 800px) {
//     width: 100px;
//   }
// `;

export const Apply = () => {
  return (
    <Container>
      <a
        class="typeform-share button"
        href="https://form.typeform.com/to/FZGhosy0"
        data-mode="popup"
        target="_blank"
      >
        <Title>APPLY</Title>
      </a>
      <script src="/Typeform.js"></script>
      {/* <FromBox>
        <Box>
          <FromInput left placeholder="Your name" />
          <FromInput placeholder="Nationality" />
        </Box>
        <Box>
          <FromInput left placeholder="Email address" />
          <FromInput placeholder="Where are you applying" />
        </Box>
        <FromText placeholder="Your message" />
        <Send>Send</Send>
      </FromBox> */}
    </Container>
  );
};
