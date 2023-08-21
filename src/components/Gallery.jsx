import React from 'react';
import  video from "../assets/Video.png"
import thomso from "../assets/thomso.png"
import thomso2 from "../assets/thomso2.png"
import mgcl from "../assets/mgcl.png"
function Gallery() {
  return (
    <div className=" w-full mx-auto  py-2 lg:pt-12 overflow-hidden mb-20">
      <div className="flex flex-wrap">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 pl-0 md:p-2 md:pl-0 " >
            <video
              alt="gallery"
              className="block h-full w-full object-cover object-center"
              src={"https://drive.google.com/uc?export=view&id=1fB4IMIuGgcHVmBe2l1CQjHaV2QRgHEmG"}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 pr-0 md:p-2 md:pr-0">
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={mgcl}
            />
          </div>
          <div className="w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={thomso2}
            />
          </div>
          <div className="w-2/3 p-1 pr-0 md:p-2 md:pr-0">
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={thomso}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
