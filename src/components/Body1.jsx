import React from 'react'

const Body1 = () => {
  return (
    <section className='my-8 sm:my-12 flex flex-col space-y-3 items-center justify-center '>
        <h2 className='text-center text-lg sm:text-xl md:text-2xl'>OUR SETS</h2>
        <div className="grid sm:grid-cols-2 p-4 md:grid-cols-4 place-items-center gap-1 sm:gap-2 md:gap-3 sm:h-5/6 sm:w-2/3 text-xs md:text-sm">
            <div className="md:h-[15rem] relative">
            <img className='h-[90%]' src='https://images.unsplash.com/photo-1700151573509-1cae73909b9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-white text-white'>BEST SELLER</button>
            <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
            <p className='text-end'>$45</p>
            </div>
            </div>
            <div className="md:h-[15rem] relative">
            <img className='h-[90%]' src='https://images.unsplash.com/photo-1700151573554-1c7792f600b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-white text-white'>BEST SELLER</button>
           <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
            <p className='text-end'>$25</p>
            </div>
            </div>
            <div className="md:h-[15rem] relative">
            <img className='h-[90%]' src='https://images.unsplash.com/photo-1695048367315-3d4bcd9c5df4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-white text-white'>BEST SELLER</button>
           <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
            <p className='text-end'>$50</p>
            </div>
            </div>
            <div className="md:h-[15rem] relative">
                <img className='h-[90%]' src='https://images.unsplash.com/photo-1700151573574-93eca8777bf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-white text-white'>BEST SELLER</button>
          <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
            <p className='text-end'>$35</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Body1