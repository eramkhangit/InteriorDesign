import React from 'react'
import Image1 from '../Image/pexels-photo-1571460.jpeg'
import Image2 from '../Image/Image2.webp'
import Image3 from '../Image/Image3.jpg'

function About() {
  return (
    <div className='bg-green-950 px-8 md:px-14 py-2'>

      {/* Div-1  */}
      <div style={{
        width: '100%',
        height: '280px',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image1})`,
        backgroundRepeat: 'no-repeat',
       }} >
        <h1 className='bg-slate-50 w-[40%] md:w-[15%] text-center py-4 md:py-6 pl-1 pr-6 md:pr-8 shadow-lg relative top-[5rem] font-semibold text-xl '>About Us</h1>

      </div>

      {/* Div-2 */}
      <div className=' mt-4 flex flex-col md:flex-row gap-4 md:gap-8'>

        <div className=' w-full md:w-[50%] '>

          <div style={{
            width: '100%',
            height: '280px',
            backgroundSize: 'cover',
            backgroundImage: `url(${Image2})`,
            backgroundRepeat: 'no-repeat',
          }}></div>

          <div className='py-2 text-white'>

            <p className='inline-block text-[12px] md:text-[14px]'> <span className='text-xl font-semibold'> R</span> lorem ipsum dolor sit amet, consectetur adipisicing elit. Est hic, magnam autem vel qui cum. Vitae quasi eligendi nihil numquam ducimus dignissimos rem perspiciatis!</p>
          </div>

        </div>

        
          <div className=' w-full md:w-[50%]'>

            <div className='text-white pt-10 md:pt-[70px]  h-[100px]'>
              <h2 >Lorem ipsum, dolor sit amet consectetur adipisicing elit Impedit</h2>
            </div>

            <div className='bg-slate-100 text-[11px] md:text-sm py-2 px-2'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis quis tempore iste esse aperiam impedit accusamus animi quas fugit.</p>
            </div>
            <div className='text-[11px] md:text-sm text-white py-4'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,Lorem ipsum dolor sit. nam.</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quasi exercitationem eos aliquid enim reprehenderit?</p>
            </div>

          </div>
       

      </div>
       
       {/* Div-3 */}
      <div className='pt-4'>
        <div style={{
        width: '100%',
        height: '280px',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image3})`,
        backgroundRepeat: 'no-repeat',
       }}></div>
       
      </div>

    </div>
  )
}

export default About