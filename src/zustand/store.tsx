import {create} from 'zustand'

interface BearType {
    bears:number;
    increasePopulation:()=>void;
    updateBears:(count:number)=>void;
}

export const useStore=create<BearType>((set)=>({
    bears:0,
    increasePopulation:()=>set((state)=>({bears:state.bears+1})),
    removeAllBears:()=>set({bears:0}),
    updateBears:(newBears)=>set({bears:newBears}),

}))