"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../public/images/Frame 117.png";
// icons star 
import { FaBars } from "react-icons/fa";
import { Drawer } from 'antd';
import { IoMdClose } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { usePathname } from "next/navigation";

// icons end 
const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false)
  const pathName =usePathname()

  const showDrawer = () => {
    setOpen(true);
    setShow(true)
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className=" ">
      <div className="container px-3 md:px-5 2xl:px-0 lg:h-[121px] h-20 flex justify-between items-center">
        <Link href="/" className="z-40">
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="This is logo"
            className="md:w-[218px] md:h-[57px] w-[150px] h-11 "
          />
        </Link>

        <div className="flex items-center xl:gap-[120px] md:gap-[80px]">
          <menu className="lg:text-lg lg:flex gap-11 hidden ">
            <Link className={`${pathName === '/' ?'text-[#ff4e26ff]':' hover:text-[#ff4e26ff] duration-500'}`} href="/">Home +</Link>
            <Link className={`${pathName === '/About' ?'text-[#ff4e26ff]':' hover:text-[#ff4e26ff] duration-500'}`} href="/About">About +</Link>
            <Link className={`${pathName === '/Services' ?'text-[#ff4e26ff]':' hover:text-[#ff4e26ff] duration-500'}`} href="/Services">Service +</Link>
            <Link className={`${pathName === '/Page' ?'text-[#ff4e26ff]':' hover:text-[#ff4e26ff] duration-500'}`} href="/Page">Page +</Link>
            <Link className={`${pathName === '/Blog' ?'text-[#ff4e26ff]':' hover:text-[#ff4e26ff] duration-500'}`} href="/Blog">Blog +</Link>
          </menu>
          <button className="lg:px-8 lg:py-[14px] lg:flex  hidden py-2 px-4 bg-[#ff4e25] text-lg">Contact</button>
        </div>
        {/* small device start  */}
        <div className="lg:hidden">
          <FaBars onClick={showDrawer} className="text-2xl lg:hidden" />
          <Drawer
            closeIcon={false}
            placement={"left"}
            onClose={onClose}
            open={open}
            className="!bg-gray-900 lg:!hidden  "
          >
            <div className="w-full flex justify-between h-20 border-b border-gray-600 ">
              <button className=" bg-[#ff4e25] h-[35px] px-4 text-lg w-fit text-white font-semibold rounded">Contact</button>
              <IoMdClose onClick={onClose} className="text-2xl text-white " />
            </div>
           
            <div className="text-white mt-10 flex flex-col text-xl  gap-8">
              <Link onClick={onClose} href="/" className={`${pathName === '/' ?'text-[#ff4e26ff] flex items-center gap-2':' hover:text-[#ff4e26ff] duration-500  flex items-center gap-2'}`}><IoMdHome /> Home +</Link>
              <Link onClick={onClose} href="/About" className={`${pathName === '/About' ?'text-[#ff4e26ff] flex items-center gap-2':' hover:text-[#ff4e26ff] duration-500  flex items-center gap-2'}`}><MdOutlineDashboardCustomize /> About +</Link>
              <Link onClick={onClose} href="/Services" className={`${pathName === '/Services' ?'text-[#ff4e26ff] flex items-center gap-2':' hover:text-[#ff4e26ff] duration-500  flex items-center gap-2'}`}><MdOutlineDashboardCustomize /> Service +</Link>
              <Link onClick={onClose} href="/Page" className={`${pathName === '/Page' ?'text-[#ff4e26ff] flex items-center gap-2':' hover:text-[#ff4e26ff] duration-500  flex items-center gap-2'}`}><MdOutlineDashboardCustomize /> Page +</Link>
              <Link onClick={onClose} href="/Blog" className={`${pathName === '/Blog' ?'text-[#ff4e26ff] flex items-center gap-2':' hover:text-[#ff4e26ff] duration-500  flex items-center gap-2'}`}><MdOutlineDashboardCustomize /> Blog +</Link>
            </div>
          </Drawer>
        </div>
        {/* small device end */}
      </div>

    </nav>
  );
};

export default Header;
