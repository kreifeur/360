import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-8 h-[15vh] '>
        <div>
            WORLD360.SA
        </div>
        <ul className='flex gap-5'>
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
    </nav>
  )
}

export default Navbar