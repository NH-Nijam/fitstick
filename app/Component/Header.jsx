"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/images/Frame 117.png";
// icons star 
import { FaBars } from "react-icons/fa";
import { Drawer } from 'antd';
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";

// icons end 
const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false)

  const showDrawer = () => {
    setOpen(true);
    setShow(true)
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-10">
      <div className="container px-3 md:px-5 xl:px-0 lg:h-[121px] h-20 flex justify-between items-center">
        <Link href="#">
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="This is logo"
            className="md:w-[218px] md:h-[57px] w-[150px] h-11 "
          />
        </Link>

        <menu className="lg:text-lg lg:flex gap-11 hidden ">
          <Link href="#">Home +</Link>
          <Link href="#">About +</Link>
          <Link href="#">Service +</Link>
          <Link href="#">Page +</Link>
          <Link href="#">Blog +</Link>
        </menu>
        <button className="lg:px-8 lg:py-[14px] lg:flex  hidden py-2 px-4 bg-[#ff4e25] text-lg">Contact</button>
        {/* small device start  */}
        <div className="lg:hidden">
          <FaBars onClick={showDrawer} className="text-2xl" />
          <Drawer
            closeIcon={false}
            placement={"left"}
            onClose={onClose}
            open={open}
            className="!bg-gray-900"
          >
            <IoMdClose onClick={onClose} className="text-2xl text-white " />
            <div className="text-white mt-10 flex flex-col text-xl  gap-8">
              <Link onClick={onClose} href="#" className="flex items-center gap-2"><IoMdHome /> Home +</Link>
              <Link onClick={onClose} href="#" className="flex items-center gap-2"><MdOutlineDashboardCustomize /> About +</Link>
              <Link onClick={onClose} href="#" className="flex items-center gap-2"><MdOutlineDashboardCustomize /> Service +</Link>
              <Link onClick={onClose} href="#" className="flex items-center gap-2"><MdOutlineDashboardCustomize /> Page +</Link>
              <Link onClick={onClose} href="#" className="flex items-center gap-2"><MdOutlineDashboardCustomize /> Blog +</Link>
            </div>
          </Drawer>
        </div>
        {/* small device end */}
      </div>

    </nav>
  );
};

export default Header;
