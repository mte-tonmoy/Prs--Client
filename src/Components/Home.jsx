import React from "react";
import NavBar from "./NavBar";
import Lottie from "lottie-react";
import Nav from "./Nav";
import Animation from "../assets/animation.json";
import { Outlet } from "react-router-dom";
import MovingComponent from "react-moving-text";

const Home = () => {
  return (
    <>
      {/* <Nav /> */}
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <Lottie
            animationData={Animation}
            loop={true}
            className="max-w-sm ml-[2vw]"
          />
          <div className="ml-[4vw]">
            <MovingComponent
              type="fadeInFromLeft"
              duration="3000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
              className="text-4xl font-bold leading-9 tracking-wide text-gray-800 "
            >
              <span className="text-lime-500">Product </span>
              <span className="text-sky-500"> Requisition </span>
              <span className="text-pink-500"> System</span>
            </MovingComponent>
            <p className="py-6 text-justify text-gray-600">Welcome to Product Requisintion System, your streamlined solution for managing product requisitions with ease. Our user-friendly platform empowers your team to request, approve, and track all necessary items efficiently. Say goodbye to outdated paperwork and endless email chains.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
