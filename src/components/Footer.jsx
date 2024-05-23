import { Instagram } from '@mui/icons-material'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
const Footer = () => {
  return (
    <>
 <section className='pt-4 md:pt-8 pb-3 items-center justify-center bg-black text-white'>
    <div className="grid sm:grid-cols-6 gap-4 sm:gap-12 px-4 sm:w-3/4 mx-auto ">
      <div className="space-y-2 sm:col-span-2 text-xs md:text-sm">
        <h2 className='text-[12px] sm:text-base'>Sign Up for News & Exclusives</h2>
        <input type='text' className="w-full" placeholder='YOUR EMAIL'/>
        <p className='text-[9px] md:text-sm text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptas, tenetur voluptatibus facilis vel totam, quaerat 
         </p>
      </div>
       <ul className='text-[8px] md:text-[12px] space-y-1 flex flex-col items-center'>
       <li  className='text-[9px] md:text-sm '>ABOUT US</li>
       <li>Our Story</li>
        <li>Accesibility</li>
        <li>FAQ</li>
       </ul>
       <ul className='text-[8px] md:text-[12px] space-y-1  flex flex-col items-center'>
       <li  className='text-[9px] md:text-sm '>HELP</li>
       <li>Our Story</li>
       <li>Contact Us</li>
        <li>Privacy policy</li>
        <li>Terms of Service</li>
       </ul>
       <ul className='text-[8px] md:text-[12px] space-y-1  flex flex-col items-center '>
       <li className='text-[9px] md:text-sm'>FOLLOW US</li>
       <li>Instagram</li>
       </ul>
     <div className="flex flex-col items-center">
      <InstagramLogoIcon className='text-4xl h-6 w-6 sm:h-12 sm:w-12'/>

      </div>
      
      
      </div>

      </section>

<div className="flex justify-between text-[9px] md:text-sm bg-black text-white p-2 items-center">
  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel! Voluptas, quaerat!</p>
  <button className='bg-green-800  text-[9px] md:text-sm p-0 sm:p-1 rounded-none'>AGREE NOW</button>
</div>
    </>
   
  )
}

export default Footer