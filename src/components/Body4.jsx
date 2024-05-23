import React from 'react'

const Body4 = () => {
  return (
    <section className='sm:p-3 m-4 md:mt-12 flex flex-col space-y-3 items-center justify-center '>
    <h2 className='text-center text-lg sm:text-xl md:text-2xl'>OUR PRODUCTS</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-1 sm:gap-2 md:gap-3 sm:h-5/6 sm:w-2/3 text-xs md:text-sm">
        <div className="md:h-[15rem] relative">
        <img className='h-[90%]' src='https://images.unsplash.com/photo-1695989599251-1c5433b4b47d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-black text-black'>BEST SELLER</button>
         <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
        <p className='text-end'>$45</p>
        </div>
        </div>
        <div className="md:h-[15rem]  relative">
        <img className='h-[90%]' src='https://images.unsplash.com/photo-1698545038558-c55354f8c4ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-black text-black'>BEST SELLER</button>
          <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
        <p className='text-end'>$25</p>
        </div>
        </div>
        <div className="md:h-[15rem]  relative">
        <img className='h-[90%]' src='https://images.unsplash.com/photo-1698545038558-c55354f8c4ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-black text-black'>BEST SELLER</button>
          <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
        <p className='text-end'>$50</p>
        </div>
        </div>
        <div className="md:h-[15rem]  relative">
            <img className='h-[90%]' src='https://plus.unsplash.com/premium_photo-1681122564108-70e833cc0962?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <button className='absolute top-0 rounded-full m-2 md:m-3 py-1 text-[10px] md:text-xs bg-transparent border border-black text-black'>BEST SELLER</button>
         <div className="grid grid-cols-3 py-2">
            <p className='col-span-2'>Neemed Dove</p>
        <p className='text-end'>$35</p>
        </div>
        </div>
       
    </div>
</section>
  )
}

export default Body4