import React from 'react'
import Image4 from '../Image/Image4.jpg'
import Image5 from '../Image/Image5.jpg'

function Work() {
  return (
    <div>

      <div className=' flex  justify-between px-6 md:px-10 gap-2 py-6 md:py-8'>

        <div className='text-md md:text-xl font-semibold '>
          <p>Explore Our Work and Creative Projects</p>
        </div>

        <div className=' text-[10px] md:text-[14px]'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

          <button className='text-md bg-black text-white py-1 md:py-2  px-2 md:px-3 mt-2' >Explore Now</button>

        </div>

      </div>

      <div>
        <div style={{
        width: '100%',
        height: '280px',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image4})`,
        backgroundRepeat: 'no-repeat',
       }}></div>
      </div>

      <div className='flex flex-col md:flex-row py-4 md:py-6 px-6 md:px-10'>

        <div className='w-full md:w-[50%] pt-8'>

          <p className='font-semibold text-xl'> All Project That We've Done</p>
          <p className='text-md font-semibold pb-[6px] md:pb-2 md:py-8'>Minimalist</p>
          <p className='text-[10px] md:text-[14px] text-slate-600 pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, provident facere temporibus impedit est, itaque placeat deleniti similique veritatis sint labore ducimus debitis, nesciunt ut pariatur! Non quasi reiciendis nostrum!</p>
        </div>

        <div className='w-full md:w-[50%]'>
          <div style={{
        width: '100%',
        height: '280px',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image5})`,
        backgroundRepeat: 'no-repeat',
       }}></div>
        </div>

      </div>

    </div>
  )
}

export default Work