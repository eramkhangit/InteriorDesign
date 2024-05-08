import React from 'react'
import Image6 from '../Image/Image6.jpg'

function Contact() {
  return (
    <div className='flex flex-col'>

      <div style={{
        width: '100%',
        height: '70vh',
        backgroundSize: 'cover',
        backgroundImage: `url(${Image6})`,
        backgroundRepeat: 'no-repeat',
      }}>

        <div className='text-white w-[50%] m-auto flex flex-col justify-center items-center pt-[8%]'>
          <p className=' py-4 text-2xl font-semibold'>CONTACT US</p>
          <p className='text-sm md:text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laboriosam quasi! Officiis dolorum eius atque, maiores debitis nesciunt inventore provident nihil doloremque sint sit possimus aspernatur illum quod recusandae, explicabo commodi voluptatibus minus assumenda esse. Et, perspiciatis eum omnis reiciendis alpiquid ea in quod assumenda rem, autem, officiis iusto ratione.</p>
        </div>

      </div>

      <div className='bg-yellow-200 py-10 px-8 flex flex-row justify-between text-[12px] md:text-[15px]'>

        <div>
          <p className='Text-4xl py-4 md:py-6'>CONTACT</p>
          <address>123-456-789</address>
          <p>company@gmail.com</p>
        </div>

        <div className='py-4 md:py-6 pt-[20%] '>
          <p>Interior Design , XYZ , Delhi</p>
        </div>

      </div>

    </div>
  )
}

export default Contact