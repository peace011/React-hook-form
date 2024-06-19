import React from 'react'
import { useReducer } from 'react'

interface actionType{
    onOpen?: () => void;
	onClose?: () => void;
}
export const useDisclosure = (initialState=false,action?:actionType) => {   //action nai boolean x so we dont have to put action.smthng 
    const [state,dispatch]=useReducer((_:unknown,newState:boolean)=>{       //action ma id or text pass gareko vaye chai action.id garxam
        if(action){
            if(newState && action.onOpen){
                action.onOpen();
            }else if(!newState && onclose){
                action.onClose
            }
        }
        return newState;
    },initialState);
  return {
    state,dispatch,
    open:()=>dispatch(true),
    close:()=>dispatch(false),
  }
}
