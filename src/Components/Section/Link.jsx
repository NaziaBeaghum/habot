import React from 'react'
import logo from '/habot.png'
import first from '/path1.png'
import second from '/second.png'
import linkedin from '/linkedin.png'
import twitter from '/twitter.png'
import facebook from '/fb.png'

const Link = () => {
  return (
    <div className='bg-royalblue mt-20  py-14 flex justify-between items-center h-48 text-white px-32 relative'>
        <div className='flex'>
         <div  className=''>
           <img src={first} alt=""/>
           <img src={second} alt=""/>
           <img src={logo} alt="" className='absolute top-12'/>
         </div>

         <div className='font-light flex items-center justify-around ml-44'>
            <div className=''>
                <ul>
                    <li><a className='font-semibold'>Company</a></li>
                    <li><a>About</a></li>
                    <li><a>FAQ</a></li>
                </ul>
          </div>
           
         <div className='ml-4'>
            <ul  >
                <li><a className='font-semibold'> Terms</a></li>
                <li><a>Data Privacy</a></li>
                <li><a>Terms</a></li>
                <li><a> Accessibility</a></li>
            </ul>
         </div>
         <div className='ml-4'>
            <ul>
                <li><a className='font-semibold'> Related</a></li>
                <li><a>Find Buyer</a></li>
                <li><a>Feedback</a></li>
            </ul>
         </div>
           
        </div>
     </div>
     <div className='flex items-center '>
        <img src={linkedin}alt="" className='mr-4'/>
        <img src={twitter} alt=""  className='mr-4'/>
        <img src={facebook} alt=""  className='mr-4'/>
     </div>
    </div>
  )
}

export default Link