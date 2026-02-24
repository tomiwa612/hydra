import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type props = {
  close: () => void;
  isOpen: boolean;
};

const Mobilenav = ({ close, isOpen }: props) => {
  const openNav = isOpen ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`w-[100%] ${openNav} transform transition-all duration-500 inset-0 fixed z-[1010] bg-[#3A3456] h-screen flex lg:hidden  px-10  `}
    >
      <div className="py-10  " onClick={close}>
        <CgClose className="size-8 text-[#8176AF]" />
      </div>

      <div className="flex items-center flex-col justify-center">
        <div className="flex flex-col space-y-8 ">
          <Link href="#about" className="font-bold text-[16px] text-[#ffff]">
            ABOUT
          </Link>
          <Link href="#services" className="font-bold text-[16px] text-[#ffff]">
            SERVICES
          </Link>
          <Link href="#services" className="font-bold text-[16px] text-[#ffff]">
            TECHNOLOGIES
          </Link>
          <Link href="#how to" className="font-bold text-[16px] text-[#ffff]">
            HOW TO
          </Link>
        </div>
        <div className="flex flex-col mt-6 items-center space-y-8">
          <div className="rounded-[40px] border-2 py-3 border-[#ffff] px-8 ">
            <Link
              href="#contact"
              className="font-bold text-[16px] text-[#ffff]"
            >
              CONTACT US
            </Link>
          </div>
          <div className="rounded-[40px] py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-8 ">
            <Link
              href="#footer"
              className="font-bold text-[16px] text-[#343045]"
            >
              JOIN HYDRA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilenav;
