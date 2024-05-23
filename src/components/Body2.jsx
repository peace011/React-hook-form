import React from 'react'

const Body2 = () => {
  return (
    <section className='flex flex-col p-4 md:p-8 items-center justify-center bg-gray-300 space-y-3'>
        <h2 className='text-center text-lg sm:text-xl md:text-2xl'>OUR ADVANTAGE</h2>
        <div className=" grid py-2 md:py-3 sm:grid-cols-3 place-items-center gap-2 md:gap-10 h-5/6 w-2/3 text-[10px] md:text-sm">
                <div className="">
                <h2 className='text-center'>IN FRAGNANCES</h2>
                <p className='text-[0.65rem] md:text-[0.8rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid earum culpa.</p>
                </div>
               
                <div className="">
                <h2 className='text-center'>IN FRAGNANCES</h2>
                <p className='text-[0.65rem]s md:text-[0.8rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid earum culpa.</p>

            </div>  
                <div className="">
                <h2 className='text-center'>IN FRAGNANCES</h2>
                <p className='text-[0.65rem]s md:text-[0.8rem] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid earum culpa.</p>
            </div> 
        </div>
        <button className='md:text-xs p-1 md:px-6 bg-green-900 text-white rounded-none text-[0.6rem] '>DISCOVER PRODUCTS</button>
  
    </section>
  )
}

export default Body2