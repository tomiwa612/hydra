"use client";
import React, { useState } from "react";
import Responsivebar from "../Navbar/Responsivebar";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CgCardSpades } from "react-icons/cg";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
      icon: IoLocationOutline,
    },
    {
      title: "Give Us a Call",
      content: "(110) 111-1010",
      icon: BsTelephoneInbound,
    },
    {
      title: "Send Us a Message",
      content: "Contact@HydraVTech.com",
      icon: MdOutlineMail,
    },
  ];

  const PrevSlide = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const NextSlide = () => {
    setIndex((Prev) => (Prev === cards.length - 1 ? 0 : Prev + 1));
  };
  return (
    <div className="bg-[#343045] w-full relative overflow-hidden ">
      <Responsivebar />
      <svg
        className="absolute bottom-20 hidden xl:flex right-50 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2,140 C214 163, 282 447, 197 700"
          fill="none"
          stroke="#6a5acd"
          strokeWidth="3"
        />
      </svg>

      <svg
        className="absolute top-0  hidden xl:flex left-130 w-full h-full  pointer-events-none"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbowStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M 300 22 C 208 283 667 152 535 441"
          transform="scale(0.8)"
          fill="none"
          stroke="url(#rainbowStroke)"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute top-0 hidden xl:flex left-120 w-full h-full  pointer-events-none"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M 140 641 C 31 112 836 243 765 236"
          transform="scale(0.7)"
          fill="none"
          stroke="url(#rainStroke)"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute bottom-40 xl:flex left-180 w-full h-full pointer-events-none"
        viewBox="-1000 0 2000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="rainStrokeMobil"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M -873 1323 C 79 1392 -973 430 0 477"
          transform="scale(0.7)"
          fill="none"
          stroke="url(#rainStrokeMobil)"
          strokeWidth="5"
        />
      </svg>
      <svg
        className="absolute bottom-80 xl:hidden md:bottom-100 lg:bottom-140 md:left-80 lg:left-100  left-50 w-full h-full pointer-events-none"
        viewBox="-1000 0 2000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="rainStrokeMobile"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M -899 1624 C 241 1125 -973 430 14 391"
          transform="scale(1.4)"
          fill="none"
          stroke="url(#rainStrokeMobile)"
          strokeWidth="8"
        />
      </svg>
      <svg
        className="absolute bottom-90 md:bottom-100 lg:bottom-160 xl:hidden right-0 w-full h-full  pointer-events-none"
        viewBox="-1000 0 2000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M 298 1476 C 276 531 -422 763 -366 217"
          transform="scale(1.8)"
          fill="none"
          stroke="url(#rainbStroke)"
          strokeWidth="8"
        />
      </svg>
      <svg
        className="absolute bottom-80 md:bottom-100 lg:bottom-160 xl:hidden right-0 w-full h-full  pointer-events-none"
        viewBox="-1000 0 2000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="1%" stopColor="#343045" />
            <stop offset="21%" stopColor="#C0B7E8" />
            <stop offset="72%" stopColor="#8176AF" />
            <stop offset="100%" stopColor="#343045" />
          </linearGradient>
        </defs>
        <path
          d="M 640 575 C 276 531 -422 763 -416 945"
          transform="scale(2)"
          fill="none"
          stroke="url(#rainbStroke)"
          strokeWidth="8"
        />
      </svg>
      <div className="w-[90%] lg:w-[80%] pt-40 pb-20 mx-auto">
        <div className="xl:flex hidden justify-between items-center">
          <div className="w-[40%] flex flex-col space-y-5">
            <div className="font-bold text-[40px] text-[#ffff]">
              <h1>
                <span className="text-[46px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent  ">
                  Dive
                </span>{" "}
                Into The Depths
              </h1>
              <h1>
                Of{" "}
                <span className="text-[46px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent  ">
                  Virtual Reality
                </span>{" "}
              </h1>
            </div>

            <p className="font-normal text-[16px] text-[#fff]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="flex items-center mt-10 gap-6">
              <div className="rounded-[40px] py-4 px-8 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] ">
                <p className="font-bold text-[12px] text-[#343045]">
                  BUILD YOUR WORLD
                </p>
              </div>
              <FaArrowRightLong className="size-8 text-[#C0B7E8]" />
            </div>
          </div>
          <div className="w-[40%] z-[1000]">
            <Image
              src="/images/Mask.png"
              alt="image"
              width={500}
              height={500}
              className="w-full h-auto object-contain  "
            />
          </div>
        </div>
        <div className="flex xl:hidden flex-col space-y-5">
          <div className="w-[100%] z-[1000]">
            <Image
              src="/images/Mask.png"
              alt="image"
              width={400}
              height={400}
              className="w-full h-auto object-contain  "
            />
          </div>
          <div className="font-bold text-[24px] text-center text-[#ffff]">
            <h1>
              <span className="text-[36px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent  ">
                Dive
              </span>{" "}
              Into The Depths
            </h1>
            <h1>
              Of
              <span className="text-[36px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent  ">
                Virtual Reality
              </span>{" "}
            </h1>
          </div>
          <div className="rounded-[40px] w-[80%] mx-auto py-4 px-8 bg-gradient-to-r text-center from-[#8176AF] to-[#C0B7E8] ">
            <p className="font-bold text-[12px] text-[#343045]">
              BUILD YOUR WORLD
            </p>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r hidden justify-between  from-[#3A3456] to-[#211E2E] overflow-x-auto w-full   rounded-[90px] px-8 py-8 lg:flex ">
          <div className="flex space-x-2 ">
            <IoLocationOutline className="size-20 text-[#C0B7E8] " />
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-[24px]   text-[#ffff]">
                Pay Us a Visit
              </p>
              <p className="font-normal text-[16px]  text-[#ffff]">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
            <div className="h-full w-[2px] bg-[#C0B7E8]/33 ml-4"></div>
          </div>

          <div className="flex  space-x-2">
            <BsTelephoneInbound className="size-16 text-[#C0B7E8] " />
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-[24px]  text-[#ffff]">
                Give Us a Call
              </p>
              <p className="font-normal text-[16px]  text-[#ffff]">
                (110) 1111-1010
              </p>
            </div>
            <div className="h-full w-[2px] bg-[#C0B7E8]/33 ml-4"></div>
          </div>
          <div className="flex space-x-2">
            <MdOutlineMail className="size-16 text-[#C0B7E8] " />
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-[24px]  text-[#ffff]">
                Send Us a Message
              </p>
              <p className="font-normal text-[16px]  text-[#ffff]">
                Contact@HydraVTech.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 relative bg-gradient-to-r from-[#3A3456] to-[#211E2E] overflow-hidden w-full  rounded-[90px] px-8 py-8 flex lg:hidden items-center">
          <button
            onClick={PrevSlide}
            className="absolute rounded-full border-2 border-gray-300 p-1 left-2 top-1/2 -translate-y-1/2 text-gray-300"
          >
            <FaChevronLeft className="size-4" />
          </button>
          <div className="flex space-x-4 w-full justify-center">
            {React.createElement(cards[index].icon, {
              className: "size-16 text-[#C0B7E8]",
            })}
            <div className="flex flex-col space-y-2">
              <p className="font-bold text-[18px] text-[#ffff]">
                {cards[index].title}
              </p>
              <p className="font-normal text-[12px] text-[#ffff]">
                {cards[index].content}
              </p>
            </div>
          </div>
          <button
            onClick={NextSlide}
            className="absolute rounded-full border-2 border-gray-300 p-1 right-2 top-1/2 -translate-y-1/2 text-gray-300"
          >
            <FaChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
