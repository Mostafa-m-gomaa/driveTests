import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';






const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="flex bg-[#0D67B1] text-white py-8 px-3 items-center justify-between sm:w-[10%] sm:relative sm:h-[100vh]">
        <Link onClick={()=>setShowMenu(!showMenu)} className='capitalize text-[22px] sm:hidden' to="/">rijinstructeurmakelijkworden      </Link>
        <div className='text-[37px] sm:hidden active:bg-black transition-all p-2 rounded-lg' onClick={()=>setShowMenu(!showMenu)}>

        <RxHamburgerMenu />
        </div>

        
    <div className={`p-8 sm:p-0  text-[22px] bg-[#0D67B1] text-white flex justify-center gap-2 flex-col w-[100%] fixed right-2 [&_a]:flex [&_a]:justify-between [&_a]:uppercase transition-all top-28
    rounded-md ${showMenu ? "left-0":"-left-[100%]" } sm:relative sm:[&_a]:flex-col-reverse sm:left-0 sm:[&_a]:items-center sm:top-[5%] sm:[&_a]:cursor-pointer sm:gap-5   sm:text-[12px] `}>

        <Link className='sm:hover:text-[#FADD15] transition-all' onClick={()=>setShowMenu(!showMenu)} to="/">home <IoIosHome className='sm:text-[45px]' />        </Link>
        <Link className='sm:hover:text-[#FADD15] transition-all' onClick={()=>setShowMenu(!showMenu)} to="/media">media  <MdOutlinePermMedia className='sm:text-[45px]' />        </Link>
        <Link className='sm:hover:text-[#FADD15] transition-all' onClick={()=>setShowMenu(!showMenu)} to="/doc">documentation   <IoIosDocument  className='sm:text-[45px]'/></Link>
        <Link className='sm:hover:text-[#FADD15] transition-all' onClick={()=>setShowMenu(!showMenu)} to="">exams <FaPencilAlt className='sm:text-[45px]' />        </Link>
        <Link className='sm:hover:text-[#FADD15] transition-all' onClick={()=>setShowMenu(!showMenu)} to="">log out <CiLogout className='sm:text-[45px]'/>        </Link>
     

    </div>
    </div>
  )
}

export default Nav