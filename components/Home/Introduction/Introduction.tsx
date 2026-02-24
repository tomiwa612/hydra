import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Introduction = () => {
  return (
    <div className="bg-[#343045] relative w-full" id="about">
      <div className="w-[90%] lg:w-[80%]  pb-10 mx-auto">
        <div className="flex-col lg:space-y-20 space-y-10 ">
          <div className="flex items-center justify-between">
            <div className="flex-col  lg:w-[40%] w-[100%] ">
              <h1 className="font-bold lg:flex hidden  lg:text-[36px] text-[26px] text-[#ffff]">
                INTRODUCTION
              </h1>
              <div className="lg:flex hidden items-center gap-6 ">
                <h2 className="font-light text-[36px] text-[#ffff]/70">
                  TO HYDRA VR
                </h2>
                <Image
                  src="/images/Component.png"
                  alt="sign"
                  width={50}
                  height={50}
                  className="w-[40%]   h-full object-contain"
                />
              </div>
              <div className="lg:hidden flex-col items-center justify-center text-center">
                <h1 className="font-bold  lg:text-[36px] text-[26px] text-[#ffff]">
                  INTRODUCTION
                </h1>
                <h2 className="font-light text-[26px] text-[#ffff]/70">
                  TO HYDRA VR
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
          <svg
            className="absolute bottom-70 hidden xl:flex left-50  w-[80%] h-full opacity-10 pointer-events-none"
            viewBox="-1000 0 2000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rainStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#343045" />
                <stop offset="22%" stopColor="#C0B7E8" />
                <stop offset="79%" stopColor="#8176AF" />
                <stop offset="97%" stopColor="#343045" />
              </linearGradient>
            </defs>
            <path
              d="M 663 752 C 154 529 101 2023 -1752 871"
              transform="scale(0.7)"
              fill="none"
              stroke="url(#rainStroke)"
              strokeWidth="8"
            />
          </svg>
          <svg
            className="absolute bottom-40 hidden xl:flex left-50  w-[80%] h-full opacity-10 pointer-events-none"
            viewBox="-1000 0 2000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rainStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#343045" />
                <stop offset="22%" stopColor="#C0B7E8" />
                <stop offset="79%" stopColor="#8176AF" />
                <stop offset="97%" stopColor="#343045" />
              </linearGradient>
            </defs>
            <path
              d="M 663 752 C 154 529 101 2023 -1752 871"
              transform="scale(0.7)"
              fill="none"
              stroke="url(#rainStroke)"
              strokeWidth="8"
            />
          </svg>
          <div className="flex-col lg:flex-row flex justify-between  ">
            <div className="relative flex-col  lg:w-[40%] w-[100%] ">
              <Image
                src="/images/Mask2.png"
                alt="sign"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-col space-y-2 w-[100%] lg:w-[55%]  ">
              <h1 className="font-bold lg:flex hidden  lg:text-[36px] text-[26px] text-[#ffff]">
                ABOUT
              </h1>
              <h2 className="font-light text-[36px] lg:flex hidden  text-[#ffff]/70">
                HYDRA VR
              </h2>
              <p className="font-normal text-[16px] text-[#ffff]/70 mt-8">
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                mattis rhoncus urna neque viverra justo. Vivamus at augue eget
                arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
                Aenean et tortor at risus viverra adipiscing at in. Mattis
                aliquam faucibus purus in massa. Est placerat in egestas erat
                imperdiet sed. Consequat semper viverra nam libero justo laoreet
                sit amet. Aliquam etiam erat velit scelerisque in dictum non
                consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec
                ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet
                nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n
                tempor.
              </p>
              <div className="rounded-[40px] py-4 px-8 bg-gradient-to-r w-[80%] text-center mx-auto lg:mx-0 lg:w-fit mt-5 from-[#8176AF] to-[#C0B7E8] ">
                <p className="font-bold text-[12px] text-[#343045]">
                  LET’S GET IN TOUCH
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-col  lg:w-[40%] w-[100%] ">
              <h1 className="font-bold lg:flex hidden  lg:text-[36px] text-[26px] text-[#ffff]">
                WHY BUILD
              </h1>
              <div className="lg:flex hidden items-center gap-6 ">
                <h2 className="font-light text-[36px] text-[#ffff]/70">
                  WITH HYDRA?
                </h2>
                <Image
                  src="/images/Component.png"
                  alt="sign"
                  width={50}
                  height={50}
                  className="w-[40%]   h-full object-contain"
                />
              </div>
              <div className="lg:hidden flex-col items-center justify-center text-center">
                <h1 className="font-bold  lg:text-[36px] text-[26px] text-[#ffff]">
                  WHY BUILD
                </h1>
                <h2 className="font-light text-[26px] text-[#ffff]/70">
                  WITH HYDRA?
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
      </div>
    </div>
  );
};

export default Introduction;
