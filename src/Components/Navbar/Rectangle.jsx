import React from 'react'

const Rectangle = () => {
  return (
    <div className=' text-center xs:h-heightxs md:h-heightmd bg-rectangle bg-no-repeat bg-cover xs:px-14 md:px-28 py-32'>
        <div className=''>
            <p className=' text-white text-3xl font-bold '>Are You a Supplier?
            <span className='block'>Explore Matching Opportunities.</span></p>
        </div>
        <div className='flex xs:flex-col md:flex-row justify-center items-center mt-11 '>
            {/* <img src="/inputvector1.png" alt="" className='absolute left-16 '/> */}
            <input className='mr-3 py-3 rounded-sm w-96 px-4 ' placeholder="Search your required service here"/><br/>
           
            <input className=' mr-3 py-3 rounded-sm w-96 px-4 ' placeholder='Search your desired location here'/>
            <button className='bg-btn px-6 py-3 text-white xs:mt-6 md:mt-0'>Search</button>
        </div>
        <div>
            <p className='text-white font-semibold text-xl mt-8'>Are you a buyer?  <span className='font-light'>Click here if you are looking to post a requirements</span> </p>
        </div>
        
    </div>
  )
}

export default Rectangle