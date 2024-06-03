import React, { ReactNode,createContext, useState } from 'react'
import ProductTitle from './contextComponent/ProductComponent/ProductTitle';
import ProductImage from './contextComponent/ProductComponent/ProductImage';
import ProductPrice from './contextComponent/ProductComponent/ProductPrice';
import ProductDescription from './contextComponent/ProductComponent/ProductDescription';
import data from './contextComponent/ProductComponent/data';

interface CardContextType{
    isSelected:boolean;
    setIsSelected:React.Dispatch<React.SetStateAction<boolean>>;
}
interface ProductType{
  children:ReactNode;        
}

export const CardContext=createContext<CardContextType>({
    isSelected:false,
    setIsSelected:()=>{},
});

const ProductCard = ({children}:ProductType) => {
    const [isSelected,setIsSelected]=useState(false);

  return (
    <CardContext.Provider value={{isSelected,setIsSelected}}>
    <div onClick={()=>setIsSelected((curr)=>!curr)}>
  
       {children}  

    </div>

   </CardContext.Provider>    /* productcard children can access selected value acc to their need */

//    <div>
      /* <ProductTitle>{title}</ProductTitle>
      <ProductImage>{image}</ProductImage>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{price}</ProductPrice> */
    //   {children}


   /* {data}  data can be access bcoz it is variable not a function*/
//    </div>
  );
};
ProductCard.Title=ProductTitle;   //assigning subcomponents as properties of Productcard
ProductCard.Image=ProductImage;
ProductCard.Description=ProductDescription;
ProductCard.Price=ProductPrice;

export default ProductCard

// import React from 'react'
// import ProductTitle from './contextComponent/ProductComponent/ProductTitle';
// import ProductImage from './contextComponent/ProductComponent/ProductImage';
// import ProductPrice from './contextComponent/ProductComponent/ProductPrice';
// import ProductDescription from './contextComponent/ProductComponent/ProductDescription';

// interface ProductType{
//     title:string;
//     description:string;
//     image:string;
//     price:string;
// }
// const ProductCard = ({title,image,description,price}:ProductType) => {
//   return (
//     <div>
//        <ProductTitle>{title}</ProductTitle>
//        <ProductImage>{image}</ProductImage>
//        <ProductDescription>{description}</ProductDescription>
//        <ProductPrice>{price}</ProductPrice>

//     </div>
//   )
// }

// export default ProductCard