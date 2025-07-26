import React from 'react'
import assets from '../assets/assets'


const Header = () => {
  return (
    <div>
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
<img src={assets.image11} alt=""  className='w-15 h-15'/>
<div className='flex items-center gap-10'>


    <ul className="md:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500/80 transition" href="#">hire an expert</a></li>
    </ul>

    <button type="button" className="bg-gray-200  text-black border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-2xl">
        Get started
    </button></div>

   

</nav>




    </div>
  )
}

export default Header
