import React from "react";

const AdminComponent = ({name, position,institute}) => {
  return (
    <>
      <div
        className={` text-center bg-bg-gray w-[400px] h-[150px] flex flex-col justify-center items-center rounded-xl`}
      >
        <h4 className=" text-orange text-center  mb-0 text-xl font-bold w-fit">
          {name}
        </h4>
        <p className=" text-center text-sm w-fit">{position}</p>
        <p className=" text-center text-sm w-fit">{institute}</p>
      </div>
    </>
  );
};

export default AdminComponent;
