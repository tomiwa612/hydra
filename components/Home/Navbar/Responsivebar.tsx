"use client";
import React, { useState } from "react";
import Mobilenav from "./Mobilenav";

import Navbar from "./Navbar";

const Responsivebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  return (
    <div>
      <Mobilenav close={closeNav} isOpen={isOpen} />
      <Navbar show={openNav} />
    </div>
  );
};

export default Responsivebar;
