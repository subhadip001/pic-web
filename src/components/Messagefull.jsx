import React from "react";
import { useParams } from "react-router-dom";
import message from "../Apis/MessageApi";
import Header from "./Header";
const Messagefull = () => {
  const { by } = useParams();
  const data = message.filter((obj) => {
    return obj.id == by;
  });
  return (
    <>
      <Header bgOn={true} />
      <div className=" m-auto w-[1144px] 3xl:w-[1430px] text-lg red_hat_text">
        <h3 className="heading  ">{data[0].heading}</h3>
        <div className="flex flex-wrap mb-14 pb-[32px] 3xl:pb-[40px] rounded-md  mt-14 3xl:mt-[72px] " style={{ background: "#F4F8F6" }}>
          <div className="flex flex-col sm:flex-row ">
            <div className="w-[446px] object-center rounded-md">
              <img
                className=" object-contain w-[440px] rounded-md max-w-[440px]"
                height={"410px"}
                src={data[0].img}
                alt=""
              />
            </div>
            <div className=" flex flex-col">
              <div className=" font-bold bg-white pt-[40px] pl-14 pb-[19px] 3xl:pb-[24px]">
                <h4 className="message-by mb-0 text-[22px] 3xl:text-[28px] font-bold red_hat_text">
                  {data[0].by}
                </h4>
                <p className=" text-[#999999] text-[22px] 3xl:text-[28px] font-medium red_hat_text leading-8">
                  {data[0].position}
                </p>
                <p className=" text-[#999999] text-[22px] 3xl:text-[28px] font-medium red_hat_text">
                  {data[0].institute}
                </p>
              </div>
              <div className=" px-14 text-justify pt-8">
                {data[0].greeting && (
                  <p className="greeting block mb-1 text-[18px] 3xl:text-[22px] pb-[18px] 3xl:pb-[26px]">
                    {data[0].greeting}{" "}
                  </p>
                )}
                <p className="message block mb-1 text-[18px] leading-6 3xl:text-[22px] pb-[18px] 3xl:pb-[26px]">
                  {data[0].message}{" "}
                </p>
                <p className=" block font-bold mb-1 text-[18px] 3xl:text-[22px] pb-[18px] 3xl:pb-[26px]">{`"${data[0].thought}"`}</p>
              </div>
            </div>
          </div>
          {/* <div className='block w-full text-justify px-14'>{data[0].messageFull}</div> */}

          {data[0].messageFull.split("\n").map((para, index) => (
            <p
              key={index}
              className="block w-full text-justify px-14 mb-1 text-[18px] 3xl:text-[22px]"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Messagefull;
