import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div>
         {/* <ProductCard
        title="Nike Air"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CUqUQcQiiTz0M7ELPWwX5CWu0lbBHvT895HWlC2K3g&s"
        description="Nike is very good "
        price="$990"
        > */}
        <ProductCard>
          <ProductCard.Title>Nike Air</ProductCard.Title>
          <ProductCard.Image>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CUqUQcQiiTz0M7ELPWwX5CWu0lbBHvT895HWlC2K3g&s</ProductCard.Image>
          <ProductCard.Description>Nike is very good</ProductCard.Description>
          <ProductCard.Price>$990</ProductCard.Price>
          </ProductCard>

          <ProductCard>
          <ProductCard.Image>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CUqUQcQiiTz0M7ELPWwX5CWu0lbBHvT895HWlC2K3g&s</ProductCard.Image>
          </ProductCard>
    </div>
  )
}

export default Product

//Note: Product card ma properties assign garyo ani Product ma chai properties access garne 