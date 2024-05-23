import React from 'react'

const Banner = () => {
  return (
    <div>
         <section className="h-[50vh] md:h-[70vh]  text-white flex justify-center items-center bg-cover bg-[url('https://images.unsplash.com/photo-1707910393318-8f97ea71736a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <div className="text-center w-[16rem] space-y-4">
            <p className='sm:text-4xl text-xl'>
            <span>THE BEAUTY</span>
            <br />
            <span>OF HOMECARE </span>
          </p>
              <button className='bg-green-900 text-xs rounded-none'>SHOP THE COLLECTION</button>
            </div>
        </section>
    </div>
  )
}

export default Banner