import React, { ReactNode } from 'react'
import { useContext } from 'react'
import { CardContext } from '../../ProductCard';

interface CardContextType{
    isSelected:boolean;
    setIsSelected:React.Dispatch<React.SetStateAction<boolean>>;
}
interface ProductType{
    children:ReactNode;        
  }

const ProductDescription = ({children}:ProductType) => {
    const {isSelected}=useContext<CardContextType>(CardContext);
  return (
    <div> {isSelected?  <p>{children}</p>:""}</div>
  )
}

export default ProductDescription