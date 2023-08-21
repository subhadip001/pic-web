import React from "react";
import MessageApi from "../Apis/MessageApi";
import Message from "../components/Message";
import About from "../components/About";
import "../styles/message.css";
import Recruiters from "../components/Recruiters";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import home from "../assets/images/home.webp";
import g3 from "../assets/images/gh3.webp";
const Home = () => {
  const images = [home, g3];
  const imgs = [
    home,
    "https://s3-alpha-sig.figma.com/img/1477/46bf/3e6e19266657bd5590df9d6b1360f2a2?Expires=1693785600&Signature=KHPeaSTL6IhaAnkXPublgUppNCBw6hKJJ8ZhjyV7qJTxg6tnrKZW90SZ8~aVepu1HsB2XusS4hefdjCA-4UAx3-BAwZDtEgMEF7FuIMk~QMRWUkqZpIXPncCwqXhLpbGk~BxZ4Vh4vQV1gNvAbPnfj1xiu91wHWDFD0jyLPOLWa17IAd8YVONzCweWP3xhgctRIiZCD~pfTIrA-igwJAF-~EosCI6hVEybMJ72YmeUYCSAxZI3IbboLtqg5845DpoVlxy78FEOGDoCMkFq2vHIPyNQShncHanW~qEZlX9DgeOGgpoD9qZSZJIhLiEA2GPLazzNc2lYO1Mcm33jA~IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/e624/2e5b/2f989fb1dade0177b4a8364f4cedd7c6?Expires=1693785600&Signature=U2DRIwRhnbU6MbPHZ9W9b0Lzmxm-zdYOyEpHzflOoBmc5ckurhdc1lGjkxjcqZ0xb~Nnmh56g9COf7DuvtPohgi~Uc9GiWXUCZkigQ8E2h4GC4m-RLMAEZzx2XhaYtEHKbaAwXSm3MzLKv0TXnRbk8WMB9Z3hAKFq3m6iCycPNsqBOU8YIolQmTAUhhOtJYiuE2DplnHVkYW9m4lyfeuWlcmVAgvEL2cvA7X8pfqlVPybTFgMLETisQBSsDLBLcPScTSy8-2pzjTIYaDyKtnT28F9OZexiMSJAXuPWZNxEGEL8R7p9X1Cu9JHNOT6gMPfMOjknr9pkHwFoOkjs3JvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/364f/2c25/9295aeb63fb76d4e5b0b27d9e372219a?Expires=1693785600&Signature=luzv4~75tK6dzEuM5e~1SK~ROp3cwByjGufp6-EVqU3maNXgYVMasm0j76zXqvpyMZrogXMw29qjHU0UVFWkMuIXF69alAa6Z4wX4TFwwsbZXGTCCKew-rwK39LOwhSnysAtaw4YKdERUlYMsxWX-eg1b-JtmDHxPx-0Wks60PRdjrmmJlYlC587g5Jxvt5N5cveJHJr2vm2mCm-fP2cwPwPcGWQUxROVHCbbqc8POfl~0du7VQ6S0aIfj-VHhzUkA1VG4bw732YF5zlyaptCnlzATEvqArff2Pl834uF5OueRjbzLPyn1HgyCmN9m-k89Dwh1PjMuZfUSOm5TIS7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];
  return (
    <>
      <div className="  relative mb-20 h-screen">
        <div className=" absolute top-0 w-full">
          <Header bgOn={false} />
        </div>
        <div className=" absolute top-0 w-full  z-0">
          <Carousel
            images={imgs}
            style={{ height: "100vh", maxHeight: "100vh" }}
            interval={3000}
          />
        </div>
        <div
          className=" w-full absolute h-full top-0 bg-[#00000099] z-10 "
          onClick={() => {
            console.log("clicked");
          }}
        ></div>
        <div className="absolute bottom-0 flex justify-center z-20 flex-col items-center w-full text-white font-bold tracking-wider">
          <p className=" text-2xl">श्रमं विना न किमपि साध्यम्</p>
          <div className=" h-10 rotate-180">
            <hr className="  block  w-1 bg-orange animate-reverse-height " />
          </div>
        </div>
      </div>

      <About />

      <div className=" flex justify-center bg-bg-gray">
        <div className=" flex w-[80%] gap-5 py-12">
          {MessageApi.map((curr, index) => {
            return (
              <Message
                key={index}
                heading={curr.heading}
                img={curr.img}
                by={curr.by}
                message={curr.message}
                target={curr.id}
              />
            );
          })}
        </div>
      </div>

      <Recruiters />
      <Gallery />
    </>
  );
};

export default Home;
