import React from "react";
import Header from "../components/Header";
import picPlogo from "../assets/images/picPlogo.png";
import teamData from "../Apis/team";

const ContactDetails = () => {
  return (
    <>
      <Header bgOn={true} />
      <h3 className="heading">Contact Details</h3>
      <div className=" w-90% mx-auto mb-10">
        <div className=" py-4 px-6 gap-10 bg-bg-gray rounded-xl w-full inline-flex flex-wrap sm:flex-nowrap mt-10">
          <div className=" bg-PIC-Blue p-10 h-[250px] w-[250px] rounded-xl object-contain ">
            <img src={picPlogo} alt="pic-logo" className=" scale-125" />
          </div>
          <div className=" text-lg pr-5 flex flex-col justify-center gap-10">
            <span className=" text-PIC-heading font-semibold text-[2.25rem]">
              Placement and Internship Cell,{" "}
              <span className=" text-[1.75rem] font-bold text-orange">
                IIT Roorkee
              </span>
            </span>
            <div className="grid grid-cols-2">
              <div className="left flex flex-col gap-5">
                <div className="flex gap-2">
                  <div className=" object-contain">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 34 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.11109 26.8346C2.36109 26.8346 1.71064 26.5592 1.15972 26.0083C0.608802 25.4573 0.333344 24.8069 0.333344 24.0569V2.94572C0.333344 2.19572 0.608802 1.54526 1.15972 0.994344C1.71064 0.443427 2.36109 0.167969 3.11109 0.167969H30.8889C31.6389 0.167969 32.2894 0.443427 32.8403 0.994344C33.3912 1.54526 33.6667 2.19572 33.6667 2.94572V24.0569C33.6667 24.8069 33.3912 25.4573 32.8403 26.0083C32.2894 26.5592 31.6389 26.8346 30.8889 26.8346H3.11109ZM17 14.5568L3.11109 5.58459V24.0569H30.8889V5.58459L17 14.5568ZM17 11.7791L30.7778 2.94572H3.25001L17 11.7791ZM3.11109 5.58459V2.94572V24.0569V5.58459Z"
                        fill="#203A73"
                      />
                    </svg>
                  </div>
                  <div className=" text-sm">
                    <a
                      href="mailTo:placement@iitr.ac.in"
                      className=" underline"
                    >
                      placement@iitr.ac.in
                    </a>{" "}
                    or{" "}
                    <a href="mailTo:pic@iitr.ac.in" className=" underline">
                      pic@iitr.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className=" object-contain">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.1667 30.5C24.713 30.5 21.3032 29.6782 17.9375 28.0347C14.5717 26.3912 11.5625 24.2431 8.90971 21.5903C6.25693 18.9375 4.10879 15.9283 2.46529 12.5625C0.821764 9.19675 0 5.78703 0 2.33333C0 1.80953 0.174597 1.37301 0.523792 1.02379C0.873014 0.674597 1.30953 0.5 1.83333 0.5H7.97221C8.3539 0.5 8.69469 0.629625 8.99458 0.888875C9.29447 1.14815 9.48146 1.49075 9.55554 1.91667L10.6667 7.36108C10.7222 7.74997 10.7153 8.10414 10.6458 8.42358C10.5764 8.74303 10.4259 9.0185 10.1944 9.25L6.06942 13.4167C7.49536 15.8056 9.14583 17.9306 11.0208 19.7917C12.8958 21.6528 15 23.2408 17.3333 24.5556L21.2778 20.5278C21.5463 20.2408 21.8681 20.0348 22.2431 19.9098C22.6181 19.7848 22.9908 19.7593 23.3611 19.8333L28.5833 20.9445C28.9965 21.0347 29.3359 21.2379 29.6016 21.5538C29.8672 21.8698 30 22.2408 30 22.6667V28.6667C30 29.1905 29.8254 29.627 29.4762 29.9762C29.127 30.3254 28.6905 30.5 28.1667 30.5ZM4.70833 10.8333L7.875 7.63888L7 3.27775H2.79167C2.83794 4.37961 3.01386 5.54628 3.31942 6.77775C3.62497 8.00925 4.08794 9.36111 4.70833 10.8333ZM19.9305 25.8889C21.0509 26.3982 22.2431 26.8102 23.507 27.125C24.7708 27.4398 26.0093 27.6297 27.2222 27.6945V23.5L23.0556 22.6528L19.9305 25.8889Z"
                        fill="#203A73"
                      />
                    </svg>
                  </div>

                  <a href="tel:1332 - 285260" className=" text-sm">
                    {" "}
                    Ph: +91 - 1332 - 285260, 273456
                  </a>
                </div>
              </div>
              <div className="right flex flex-col gap-5">
                <div className="flex gap-2">
                  <div className=" object-contain">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3333 30.5L9.69442 26.75L2.13887 29.7222C1.63887 29.963 1.1574 29.9329 0.694459 29.632C0.231486 29.331 0 28.8981 0 28.3333V5.05554C0 4.69443 0.104167 4.37499 0.3125 4.09721C0.520833 3.81943 0.796291 3.6111 1.13887 3.47221L9.69442 0.5L20.3333 4.22221L27.8611 1.25C28.3611 1.02778 28.8426 1.0625 29.3055 1.35417C29.7685 1.64583 30 2.07407 30 2.63888V26.1111C30 26.4352 29.8958 26.7176 29.6875 26.9583C29.4792 27.1991 29.213 27.3796 28.8889 27.5L20.3333 30.5ZM18.8333 27.0556V6.52775L11.1667 3.91667V24.4445L18.8333 27.0556ZM21.6111 27.0556L27.2222 25.1945V4.38888L21.6111 6.52775V27.0556ZM2.77775 26.5833L8.38888 24.4445V3.91667L2.77775 5.77775V26.5833Z"
                        fill="#203A73"
                      />
                    </svg>
                  </div>

                  <p className=" text-sm">
                    Placement and Internship Cell, Indian Institute of
                    Technology Roorkee
                    <br />
                    Roorkee-247667, Haridwar district, Uttarakhand, India
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className=" object-contain">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/a932/c345/ac9f445c9f0e67b450861e2a059ad286?Expires=1693785600&Signature=R2IteAGh-iMh8qSvaYJl3wubUALesDWOZRJyC9Ax0Hy0C0-NW0dCkNlI~1tXe8ZMClU8z17wzuW~M-~BJx23tUpfxrW~pBlBuwpFFAQsJ-6iQTv4NA8xqMQ34VYEVnvG68HbfwUxVO-JfDIUw1gJtCDB7rbNfgBl3kU-0kMIa69T3PGa83~mm9D-YKaFPqIHJZJGqsXOfbfZbCBGqY9JpNIAqgsKyB2qB4-emK6gxWpw4mRXJ6jAAYlF~iDk3FQOygVL4nIVZDIAdDOEH7jxrVqI423wGi12YiRyJU17tAbJJQEWoTyw5P6W8sBqSDhMVDg4p3-~Xf9yNeCP4TVWtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className=" text-sm">
                    <a
                      href="https://www.linkedin.com/company/tpoiitroorkee/"
                      className=" underline"
                    >
                      https://www.linkedin.com/company/tpoiitroorkee/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <h3 className="heading">Team</h3>
        <div className="grid grid-cols-3 w-[90%] mx-auto gap-14">
          {teamData.map((item) => {
            return (
              <div className="flex col-span-1">
                <img className="w-[7.5625rem] aspect-square object-cover rounded-[0.5rem]" alt="img" src={item.image} loading="lazy" />
                <div className="flex flex-col justify-end">
                  <div className="bg-[#F4F8F6] py-[1rem] px-[1.5rem]">
                    <span className="">
                      {item.name}
                      <br />
                    </span>
                    <span className="">{item.phone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ContactDetails;
