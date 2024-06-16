import React from 'react'
import { useStore } from './store'

// interface BearType {
//     bears:number;
//     increasePopulation:()=>void;
//     updateBears:(count:number)=>void;
// }
const Bear = () => {
    const {bears,increasePopulation}=useStore(); //one way
    const updateBear = useStore.getState().updateBears;  //3rd way

        const updateBears=useStore((state)=>state.updateBears) //2nd way
  return (
    <div>
        <h1>{bears} around here...</h1>
        <button onClick={increasePopulation}>Increase</button>
        <button onClick={()=>updateBears(5)}>Update</button>

    </div>
  )
}

export default Bear