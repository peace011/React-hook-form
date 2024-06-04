import React from 'react'

const Body3 = () => {
  return (
    <section className='flex py-2 sm:m-6 flex-col items-center justify-center'>
    <div className=" grid p-4 gap-4 sm:grid-cols-2 place-items-center sm:h-5/6 sm:w-2/3 text-[9px] md:text-sm ">
    <img className='h-[100%]' src='https://images.unsplash.com/photo-1698545038651-df449ee3f282?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    <div className="space-y-1 sm:space-y-2 sm:ml-14 md:ml-20">
        <p>RESERVATION</p>
        <p className='text-base sm:text-lg md:text-xl '>HOMECARE NOW</p>
        <p>\ buy now \</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo, natus</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo, natus</p>
        <button className='rounded-none bg-green-900 text-white py-1 sm:px-10 '>OUR STORY</button>

    </div>
        </div>
        </section>
  )
}

export default Body3