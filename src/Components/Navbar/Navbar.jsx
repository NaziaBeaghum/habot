import React from 'react'
import logo from '../../assets/image 1.png'
import vector from '/Vector (5).png'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
  return (
   <div>
       <div className='flex  items-center px-4 py-6 '>
          <div className='w-10/12'>
             <img src={logo} alt="" className='w-24'/>
          </div>

         

          <div className='flex items-center justify-evenly w-full xs:text-xs md:text-base font-semibold'>

            <div className='flex '>
               <p className='mr-2 xs:mr-0 sm:mr-1 text-header '>Find Service Tags</p>
               <KeyboardArrowDownIcon/>
            </div>
            <p className='text-header'>Find Suppliers</p>
            <button className='border border-btn px-6 py-2 text-btn'>Login / Sign Up</button>
          </div>


       </div>
        
   </div>
  )
}

export default Navbar