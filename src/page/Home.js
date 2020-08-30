import React from "react";
import { Slider } from "../components/Slider";
import { One } from "../components/Section/One";
import { Two } from "../components/Section/Two";
import { Three } from "../components/Section/Three";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "-51px",
        }}
      >
        <Slider />
        <One />
        <Two />
        <Three />
        <Footer />
      </div>
    </>
  );
};
