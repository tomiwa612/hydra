"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

const Build = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    { number: "01", content: "3D Conception & Design" },
    { number: "02", content: "Interaction Design" },
    { number: "03", content: "VR World User Testing" },
    { number: "04", content: "Hydra VR Deploy" },
  ];

  const PrevSlide = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const NextSlide = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#343045] w-full" id="how to">
      <div className="w-[90%] lg:w-[80%]  pb-10 mx-auto">
        <div className="flex-col lg:space-y-20 space-y-10 ">
          <div className="flex items-center justify-between">
            <div className="flex-col  lg:w-[40%] w-[100%] ">
              <h1 className="font-bold lg:flex hidden  lg:text-[36px] text-[26px] text-[#ffff]">
                HOW WE BUILD
              </h1>
              <div className="lg:flex hidden items-center gap-2 ">
                <h2 className="font-light text-[36px] text-[#ffff]/70">
                  WITH HYDRA VR?
                </h2>
                <Image
                  src="/images/Component.png"
                  alt="sign"
                  width={50}
                  height={50}
                  className="w-[30%]   h-full object-contain"
                />
              </div>
              <div className="lg:hidden flex-col items-center justify-center text-center">
                <h1 className="font-bold  lg:text-[36px] text-[26px] text-[#ffff]">
                  HOW WE BUILD
                </h1>
                <h2 className="font-light text-[26px] text-[#ffff]/70">
                  WITH HYDRA VR?
                </h2>
              </div>
            </div>
            <div className="lg:flex hidden items-center w-[55%]">
              <p className="font-normal text-[16px] text-[#ffff]/70">
                Vitae sapien pellentesque habitant morbi tristique senectus et
                netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
                lectus. Mi sit amet mauris commodo quis imperdiet massa
                tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                lectus sit amet est placerat in. Lectus magna fringilla urna
                porttitor rhoncus vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:grid hidden mt-20 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <div className="bg-[#0E0E0E]/20 rounded-full py-4 px-4">
                <div className="rounded-full w-[159px] h-[159px] flex items-center justify-center font-bold text-[64px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] p-20">
                  {card.number}
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <IoArrowForwardSharp className="size-10 text-[#C0B7E8]" />
                <div className="flex-col w-[70%] ">
                  <h1 className="font-bold text-[24px] text-[#fff]">
                    {card.content}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden justify-center items-center flex">
          <div className="flex flex-col justify-center  items-center space-y-8">
            <div className="bg-[#0E0E0E]/20 rounded-full  py-4 px-4">
              <div className="rounded-full w-[159px] h-[159px] flex items-center justify-center font-bold text-[64px] text-[#343045] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] p-20">
                {cards[index].number}
              </div>
            </div>
            <div className="flex justify-between text-center items-center">
              <div className="bg-[#0E0E0E]/20 rounded-full py-4 px-4">
                <button
                  onClick={PrevSlide}
                  className=" rounded-full  bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  p-3 "
                >
                  <FaChevronLeft className="size-4" />
                </button>
              </div>

              <div className="flex-col w-[70%] ">
                <h1 className="font-bold text-[24px] text-[#fff]">
                  {" "}
                  {cards[index].content}{" "}
                </h1>
              </div>
              <div className="bg-[#0E0E0E]/20 rounded-full py-4 px-4">
                <button
                  onClick={NextSlide}
                  className=" rounded-full  p-3 -right-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  "
                >
                  <FaChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
