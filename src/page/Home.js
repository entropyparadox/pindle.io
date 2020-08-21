import React from "react";
import { Slider } from "../components/Slider";
import { One } from "../components/Section/One";
import { Two } from "../components/Section/Two";
import { Three } from "../components/Section/Three";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
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
  );
};
