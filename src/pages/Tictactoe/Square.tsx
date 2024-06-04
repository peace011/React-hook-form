import React, { useState } from 'react'

interface valueType{
    value:string | null;
    onSquareClick:(i:number)=>void;
}
const Square = ({value,onSquareClick}:valueType) => {
 
  return (
    <div>
        <button onClick={()=>onSquareClick} className='w-20 h-20 border border-black flex justify-center items-center text-2xl '>{value}</button>
    </div>
  )
}

export default Square