import React, { useEffect, useState } from 'react';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showbar, setShowbar] = useState(false);

  const handleShow = () => {
    setShowbar(!showbar);
  };

  return (
    <>
     <nav className='flex justify-end sm:hidden'>
        <Menu onClick={handleShow} />
      </nav>
        <div className='sm:grid sm:grid-cols-3 p-0 sm:p-1 md:p-3 hidden'>
          <nav className='col-span-1 grid place-items-center text-xs md:text-base'>
            <ul className='grid grid-flow-col gap-4'>
              <li>HOME</li>
              <Link to='/discover'>DISCOVER</Link>

            </ul>
          </nav>
          <h2 className='col-span-1 flex justify-center items-center text-base sm:text-lg md:text-2xl'>
            HOMECOURT
          </h2>
          <nav className='col-span-1 grid place-items-center text-xs md:text-base'>
            <ul className='grid grid-flow-col gap-4 '>
              <Link to='/signup'>SIGN IN</Link>
              <li>CART</li>
            </ul>
          </nav>
        </div>
    
{showbar && (
<div className='flex justify-end sm:hidden'>
<div className='grid bg-white bg-opacity-30 text-white absolute gap-1 space-y-1 p-4'>
  <nav className='text-xs md:text-base '>
    <ul className='grid gap-1 space-y-1 '>
      <li className=''>HOME</li>
      <li>DISCOVER</li>
    </ul>
  </nav>

  <nav className='col-span-1 text-xs md:text-base'>
    <ul className='grid gap-1 space-y-1 '>
      <Link to='/signup'>SIGN IN</Link>
      <li>CART</li>
    </ul>
  </nav>
</div>
</div>
 )} 
    </>
  );
};

export default Header;
