import React from 'react'

const ProductImage = ({children}) => {
  return (
    <div>
        <img src={children}/>
        </div>
  )
}

export default ProductImage