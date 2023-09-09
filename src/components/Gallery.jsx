import React from "react";
import video from "../assets/Video.png";
import thomso from "../assets/thomso.png";
import thomso2 from "../assets/thomso2.png";
import mgcl from "../assets/mgcl.png";
import RotatingCard from "./ImageAnimation.jsx";
import Carousel from "./Carousel.jsx";
import L3_1 from "../assets/images/homephotos/L3_1.webp";
import L3_2 from "../assets/images/homephotos/L3_2.webp";
import L3_3 from "../assets/images/homephotos/L3_3.webp";
import L1_1 from "../assets/images/homephotos/L1_1.webp";
//import L1_2 from "../assets/images/homephotos/L1_2.webp";
import L1_2 from "../assets/images/homephotos/L1_2.jpg";
import L1_3 from "../assets/images/homephotos/L1_3.webp";
import L2_1 from "../assets/images/homephotos/L2_1.webp";
import L2_2 from "../assets/images/homephotos/L2_2.webp";
import L2_3 from "../assets/images/homephotos/L2_3.webp";
import FlippingSlider from "./FlippingSlider.jsx";
const L3 = [L3_1, L3_2, L3_3];
const L1 = [L1_1, L1_2, L1_3];
const L2 = [L2_1, L2_2, L2_3];

function Gallery() {
  return (
    <div className=" w-full mx-auto  py-2 lg:pt-12 overflow-hidden mb-20">
      <div className="flex flex-wrap">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 pl-0 md:p-2 md:pl-0 ">
            <video
              alt="gallery"
              className="block h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={"https://d17zlg3zez0c7d.cloudfront.net/pic/new_L4.mp4"}
            />
            {/* <iframe src="https://drive.google.com/file/d/1fB4IMIuGgcHVmBe2l1CQjHaV2QRgHEmG/preview" className='block h-full w-full object-cover object-center ' allow="autoplay"></iframe> */}
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 pr-0 md:p-2 md:pr-0 h-[400px]">
            <Carousel
            images={L3}
            style={{height:"380px"}}
            interval={4000}
          />
            {/* <FlippingSlider
              images={L3}
              style={{ height: "380px" }}
              interval={4000}
            /> */}
            {/* <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={mgcl}
            /> */}
          </div>
          <div className="w-1/3 p-1 md:p-2">
            <Carousel images={L1} style={{ height: "380px" }} interval={4000} />
            {/* <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={thomso2}
            /> */}
          </div>
          <div className="w-2/3 p-1 pr-0 md:p-2 md:pr-0">
            <Carousel images={L2} style={{ height: "380px" }} interval={4000} />
            {/* <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={thomso}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
