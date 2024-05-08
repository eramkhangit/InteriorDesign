import React from 'react'
import image from '../Image/Interior.jpg'

function Home() {
  return (
    <div className='py-4 px-8 flex flex-col gap-8 md:flex-row  h-full '>

      {/*Div-1 */}
      <div className='w-full md:w-[50%] '>

        <div className='bg-yellow-100 h-[65%] md:h-[50%] relative pt-[1rem] md:pt-1 px-4 md:px-10'>

          <p className='text-[45px] md:text-[80px] font-semibold  text-yellow-900'>Interior <span>Design</span></p>

          <p className='text-yellow-900 font-semibold italic text-sm relative top-3 md:top-[-8px] ' >We are your best option</p>
        </div>

        <div className='pt-[1rem] md:pt-[2rem] py-1 px-4 md:px-10 text-sm text-yellow-900'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit, atque commodi explicabo</p>
        </div>

        <div className='pt-4 px-4 md:px-10 flex justify-between flex-row items-center'>

          <button className=' bg-yellow-900 text-[11px] md:text-lg text-white py-1 px-2 md:px-3 '>Learn More</button>

          <div className='flex flex-col gap-2 w-[30%]'>
            <div className='border-[5px] border-yellow-200 rounded-xl h-[10px]'></div>
            <div className='border-[5px] border-yellow-200 rounded-xl h-[10px] '></div>
          </div>

        </div>



      </div>
          
      {/* Div-2  */}
      {/* <div className='border-2 border-blue-600 w-[50%] '> */}
        <img src={image} alt="" className='object-cover w-full md:w-[50%] max-h-[62%] '/>
      {/* </div> */}

    </div>
  )
}

export default Home