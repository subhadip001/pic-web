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
    "https://drive.google.com/uc?export=view&id=12KloVM438MNkn_tPeYUbjefocUvJHaw_",
    "https://drive.google.com/uc?export=view&id=1QqjOd0Hj9xPL88cdCBl63oYagIBkLQeZ",
    "https://drive.google.com/uc?export=view&id=1RfadZfAQnzq8JOXnNzBM9sp8cb7RUooV",
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
          className=" w-full absolute h-full top-0 bg-[#00000080] z-10 "
          onClick={() => {
            console.log("clicked");
          }}
        ></div>
        <div className="absolute bottom-0 flex justify-center z-20 flex-col items-center w-full text-white font-bold tracking-wider">
          <p className=" text-[24px] 3xl:text-[32px] tracking-[11.5%]">श्रमं विना न किमपि साध्यम्</p>
          <div className=" h-10 rotate-180">
            <hr className="  block  w-1 bg-orange animate-reverse-height " />
          </div>
        </div>
      </div>

      <About />

      <div className=" flex justify-center bg-bg-gray mt-[96px]">
        <div className=" flex w-[80%] gap-5 py-12">
          {MessageApi.map((curr, index) => {
            return (
              <Message
                key={index}
                heading={curr.heading}
                img={curr.img}
                by={curr.by}
                message={curr.message}
                short_mess={curr.short_mess}
                target={curr.id}
              />
            );
          })}
        </div>
      </div>
      <h3 className='heading-mssg mt-[96px]'>Our Recruiters</h3>
      <Recruiters />
      <Gallery />
      
    </>
  );
};

export default Home;
