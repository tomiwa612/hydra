import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#343045] w-full" id="contact">
      <div className="w-[90%] lg:w-[80%]  pb-10 mx-auto">
        <div className="flex flex-col space-y-5 rounded-[80px] lg:px-24 px-6 py-10 lg:py-16 bg-[#211E2E] text-center">
          <h1 className="font-bold text-[36px] text-[#fff]">JOIN HYDRA</h1>
          <div className="w-[20%] mx-auto h-[1px] bg-gradient-to-r from-[#343045] via-[#C0B7E8] to-[#8176AF]">
            {" "}
          </div>
          <h2 className="font-light text-[36px] text-[#fff]/70">
            Let’s Build Your VR Experience
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
            <input
              type="text"
              placeholder="First name"
              className="py-3 px-8 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] lg:w-[49%] border-[#fff] rounded-[24px]"
            />
            <input
              type="text"
              placeholder="Last name"
              className="py-3 px-8 mt-4 lg:mt-0 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] lg:w-[49%] border-[#fff] rounded-[24px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="Email"
              className="py-3 px-8 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] lg:w-[49%] border-[#fff] rounded-[24px]"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="py-3 px-8 mt-4 lg:mt-0 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] lg:w-[49%] border-[#fff] rounded-[24px]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="py-3 px-8 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] border-[#fff] rounded-[24px]"
          />
          <textarea
            id="message"
            rows={6}
            placeholder="Tell Us Something...."
            className="py-3 px-8 placeholder:text-[#ffff]/70 placeholder:font-normal placeholder:text-[14px] border-1 w-[100%] border-[#fff] rounded-[24px]"
          />
          <div className="rounded-[40px] mt-5 lg:mt-10 w-[100%] lg:w-[20%] mx-auto py-4 px-8 bg-gradient-to-r text-center from-[#8176AF] to-[#C0B7E8] ">
            <p className="font-bold text-[12px] text-[#343045]">
              SEND TO HYDRA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
