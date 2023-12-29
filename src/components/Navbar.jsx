import React from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 h-[15vh] '>
        <div>
            WORLD360.SA
        </div>
        <ul className='md:flex hidden gap-5'>
            <li>
                HOME
            </li>
            <li>
                CONNECT US
            </li>
            <li>
                ABOUT US
            </li>
        </ul>

        <div className='flex md:hidden text-2xl'>
        <IoMdMenu />
        </div>
    </nav>
  )
}

export default Navbar