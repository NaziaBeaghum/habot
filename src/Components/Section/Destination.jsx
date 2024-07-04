import React from 'react'

const Destination = () => {
  return (
    <div className='flex xs:flex-col md:flex-row xs:px-14 md:px-28 py-20 md:items-center '>
        <div className='w-1/2 xs:mr-auto xs:ml-auto '>
          <p className='text-black font-extrabold text-3xl mb-8'>Ready to dive into HABOT?</p>
          <p className='mb-8 text-xl'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, 
            and take the first step towards realizing your entrepreneurial dreams.</p>
            <button className='border border-btn px-16 py-4 bg-btn text-white text-xl font-semibold '>Sign up Today !</button>
        </div>

        <div className=' w-1/2 flex text-xl  md:flex-row md:flex-wrap xs:flex-col justify-center items-center xs:mr-auto xs:ml-auto md:ml-12 lg:flex-row'>
            <button className='border border-orange px-12 py-4 md:mr-6 text-xl  xs:mt-5 w-72 h-20 mb-6 '>Abu Dhabi</button>
             <button className='border border-orange px-12 py-4 md:mr-6 text-xl   w-72 h-20 mb-6'> Dubai</button>    
             <button className='border border-orange px-12 py-4 md:mr-6 text-xl  w-72 h-20  mb-6'> Sharjah & Ajman</button>   
             <button className='border border-orange px-12 py-4 md:mr-6 text-xl  w-72 h-20 mb-6 '> Fujairah</button>       
             <button className='border border-orange px-12 py-4 md:mr-6 text-xl w-72 h-20 mb-6 '>Ras Al Khaimah</button>       
             <button className='border border-orange px-16 py-4 md:mr-6 text-xl   w-72 h-20 mb-6'>Umm Al Quwain</button>     
        </div>


    </div>
  )
}

export default Destination