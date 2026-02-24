"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Services = () => {
  const [index, setIndex] = useState(0);
  const cards = [
    {
      title: "SIMULATION",
      content:
        "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: "/images/Mask6.png",
    },
    {
      title: "EDUCATION",
      content:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: "/images/Mask5.png",
    },
    {
      title: "SELF-CARE",
      content:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: "/images/Mask4.png",
    },
    {
      title: "OUTDOOR",
      content:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      image: "/images/Mask3.png",
    },
    // Add more cards as needed
  ];

  const PrevSlide = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const NextSlide = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#343045] relative w-full" id="services">
      <svg
        className="absolute bottom-20 hidden xl:flex left-0 w-full h-full  pointer-events-none"
        viewBox="-1000 0 2000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="3%" stopColor="#C0B7E8" />
            <stop offset="27%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M 1460 -62 C -1474 4357 -1097 435 -3731 595"
          transform="scale(0.2)"
          fill="none"
          stroke="url(#rainStroke)"
          strokeWidth="6"
        />
      </svg>
      <div className="w-[90%] lg:w-[80%] pb-20 mx-auto">
        <div className="hidden lg:grid xl:grid-cols-4 lg:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-[40px] bg-gradient-to-b flex-col space-y-4 mx-auto flex items-center justify-center from-[#211E2E] to-[#433D60] py-12 px-8"
            >
              <div className="bg-[#0E0E0E]/20 rounded-full py-4 px-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="font-bold text-[24px] text-[#fff] text-center">
                {card.title}
              </h1>
              <div className="w-[50%] mx-auto h-[2px] bg-[#C0B7E8]/33"></div>
              <p className="font-normal text-[12px] text-[#ffff]/70 ">
                {card.content}
              </p>
              <div className="rounded-[40px] py-4 w-fit px-6 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
                <p className="font-bold text-[12px] text-[#343045]">
                  TRY IT NOW
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[40px] relative bg-gradient-to-b flex-col space-y-4 lg:hidden mx-auto flex items-center justify-center from-[#211E2E] to-[#433D60] py-12 px-8">
          <button
            onClick={PrevSlide}
            className="absolute rounded-full bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  p-3 -left-3 top-1/2 -translate-y-1/2"
          >
            <FaChevronLeft className="size-4" />
          </button>
          <div className="bg-[#0E0E0E]/20 rounded-full py-4 px-4">
            <Image
              src={cards[index].image}
              alt={cards[index].title}
              width={400}
              height={400}
              className="w-[190px] h-[190px] object-contain"
            />
          </div>
          <h1 className="font-bold text-[24px] text-[#fff] text-center">
            {cards[index].title}
          </h1>
          <div className="w-[50%] mx-auto h-[2px] bg-[#C0B7E8]/33"></div>
          <p className="font-normal text-[12px] text-[#ffff]/70 ">
            {cards[index].content}
          </p>
          <div className="rounded-[40px] py-4 w-full text-center px-6 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            <p className="font-bold text-[12px] text-[#343045]">TRY IT NOW</p>
          </div>
          <button
            onClick={NextSlide}
            className="absolute rounded-full  p-3 -right-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]  top-1/2 -translate-y-1/2"
          >
            <FaChevronRight className="size-4" />
          </button>
        </div>
        <div className="mt-30 relative text-center">
          <Image
            src="/images/Mask7.png"
            alt="image"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
          <div className="absolute xl:inset-25 lg:inset-10 inset-2  flex-col space-y-1 lg:space-y-3">
            <h1 className="font-bold text-[16px] lg:text-[36px] text-[#ffff]">
              TECHNOLOGIES & HARDWARE
            </h1>
            <h2 className="font-light text-[16px] lg:text-[36px] text-[#fff]/70">
              USED BY HYDRA VR.
            </h2>
          </div>
          <button className="absolute rounded-full  p-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] translate-x-1/2  -bottom-5 lg:-bottom-2 ">
            <FaChevronDown className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
