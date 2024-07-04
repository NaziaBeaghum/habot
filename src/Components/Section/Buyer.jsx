import React from 'react'

const Buyer = () => {
  return (
    <div className='h-heightmed xs:h-heightxs xs:pl-4 sm:flex-col bg-royalblue mx-12  flex items-center md:flex-row  xs:flex-col md:justify-between 
     md:px-24'>
        <div>
            <img src="/comments.png"/>
        </div>
        <div className='lg:ml-8 sm:ml-6 xs:mt-4'>
            <div className='font-bold text-4xl xs:text-2xl text-white flex items-center justify-evenly'>
                <p className='text-lightred border-b-orange'>Buyer</p>
                <p> Supplier</p>
            </div>

            <div className='text-white text-2xl xs:text-xl mt-8'>
             <p >Post your requirements.</p>
             <p className='mt-4'> Sit back for multiple suppliers to contact you.</p> 
              <p className='mt-4'>Choose among the suppliers based on the ratings and reviews.</p>
            </div>
        </div>
    </div>
  )
}

export default Buyer