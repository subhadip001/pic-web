import React,{useEffect} from "react";
import Download from "./Download.jsx";
import { NavLink, useParams } from "react-router-dom";
import { FormsApi2 } from "../Apis/FormsApi.js";
import Header from "./Header.jsx";
const Forms = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Header bgOn={true} />
      <div className=" w-4/5 mx-auto mb-20 text-justify flex flex-col gap-20">
        {FormsApi2.map((data, i) => (
          <div key={i}>
            <h3 className="heading">{data.heading}</h3>
            <div>
              <p className=" text-xs sm:text-2xl font-extralight">
                {data.content}
              </p>
              <Download
                heading={data.heading}
                downloadLink={data.downloadLink}
              />
            </div>
          </div>
        ))}
        <div>
          <p className=" text-xs sm:text-2xl ">
            Please mail the filled Job Announcement Form to{" "}
            <a
              className=" underline underline-offset-4"
              href="mailto:pic@iitr.ac.in"
            >
              pic@iitr.ac.in
            </a>{" "}
            and/or{" "}
            <a
              className=" underline underline-offset-4"
              href="mailto:placement@iitr.ac.in"
            >
              placement@iitr.ac.in
            </a>{" "}
            .
          </p>
          <p className=" text-xs sm:text-2xl font-[600]">
            Kindly go through the{" "}
            <NavLink to="/placement" className=" underline underline-offset-2">
              Placement Procedure
            </NavLink>{" "}
            for further process or query
          </p>
        </div>
      </div>
    </>
  );
};

export default Forms;
