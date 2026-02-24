import Image from "next/image";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#343045] w-full" id="footer">
      <div className="w-[90%] lg:w-[80%] pt-20  pb-10 mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <Image
            src="/images/hydralogo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-[185px] h-[187px] object-contain"
          />
          <div className="w-[3px] hidden lg:flex mx-auto h-[196px] bg-gradient-to-b from-[#343045] via-[#8176AF] to-[#343045]"></div>
          <ul className="lg:flex-col hidden lg:flex space-y-3 font-bold text-[16px] text-[#fff]/70 ">
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>TECHNOLOGIES</li>
            <li>HOW TO</li>
            <li>JOIN HYDRA</li>
          </ul>
          <div className="w-[3px] mx-auto hidden lg:flex  h-[196px] bg-gradient-to-b from-[#343045] via-[#8176AF] to-[#343045]"></div>
          <ul className="flex-col hidden lg:flex space-y-3 font-bold text-[16px] text-[#fff]/70 ">
            <li>F.A.Q</li>
            <li>SITEMAP</li>
            <li>CONDITIONS</li>
            <li>LICENSES</li>
          </ul>
          <div className="w-[3px] mx-auto hidden lg:flex  h-[196px] bg-gradient-to-b from-[#343045] via-[#8176AF] to-[#343045]"></div>
          <div className="flex flex-col mt-5 lg:mt-0 space-y-3 items-center justify-center">
            <p className="font-bold text-[16px] text-[#fff]/70">
              SOCIALIZE WITH HYDRA
            </p>
            <div className="flex space-x-4 mt-5 ">
              <div className="bg-[#C0B7E8] rounded-full py-2 px-2">
                <CiFacebook className="size-6" />
              </div>
              <div className="bg-[#C0B7E8] rounded-full py-2 px-2">
                <FiTwitter className="size-6" />
              </div>
              <div className="bg-[#C0B7E8] rounded-full py-2 px-2">
                <FaLinkedinIn className="size-6" />
              </div>
              <div className="bg-[#C0B7E8] rounded-full py-2 px-2">
                <FiYoutube className="size-6" />
              </div>
              <div className="bg-[#C0B7E8] rounded-full py-2 px-2">
                <RiPinterestLine className="size-6" />
              </div>
            </div>
            <div className="rounded-[40px] w-[80%] mt-5 mx-auto py-4 px-8 bg-gradient-to-r text-center from-[#8176AF] to-[#C0B7E8] ">
              <p className="font-bold text-[12px] text-[#343045]">
                BUILD YOUR WORLD
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto h-[3px] bg-gradient-to-r from-[#343045]  mt-10 via-[#8176AF] to-[#343045]"></div>
        <div className="flex w-[80%] mx-auto items-center justify-center text-center ">
          <h1 className="font-bold text-[14px] text-[#fff]/70 mt-10 ">
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
