import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

type props = {
  show: () => void;
};

const Navbar = ({ show }: props) => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-[100%] fixed z-[1006] transition-all duration-300 ${
        showBg ? "bg-[#211E2E]" : "bg-transparent"
      }`}
    >
      <div className="xl:w-[80%] w-[90%] m-auto py-10 flex justify-between items-center">
        <div className="flex flex-row items-center space-x-3">
          <Image
            src="/images/hydralogo.png"
            alt="logo"
            width={50}
            height={50}
            className="w-fit h-fit object-contain"
          />
          <Image
            src="/images/hydra.png"
            alt="logo"
            width={50}
            height={50}
            className="w-fit h-fit  object-contain"
          />
        </div>
        <div className="hidden justify-between lg:flex items-center lg:gap-10 xl:gap-40">
          <div className="flex flex-row gap-8 items-center">
            <Link href="#about" className="font-bold text-[12px] text-[#ffff]">
              ABOUT
            </Link>
            <Link
              href="#services"
              className="font-bold text-[12px] text-[#ffff]"
            >
              SERVICES
            </Link>
            <Link
              href="#services"
              className="font-bold text-[12px] text-[#ffff]"
            >
              TECHNOLOGIES
            </Link>
            <Link href="#how to" className="font-bold text-[12px] text-[#ffff]">
              HOW TO
            </Link>
          </div>
          <div className="flex items-center xl:space-x-8 lg:space-x-4">
            <div className="rounded-[40px] border-2 py-3 border-[#ffff] px-8 ">
              <Link
                href="#contact"
                className="font-bold text-[12px] text-[#ffff]"
              >
                CONTACT US
              </Link>
            </div>
            <div className="rounded-[40px] py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] px-8 ">
              <Link
                href="#footer"
                className="font-bold text-[12px] text-[#343045]"
              >
                JOIN HYDRA
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex lg:hidden  " onClick={show}>
          <HiMenuAlt3 className="size-8 text-[#8176AF]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
