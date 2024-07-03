import React from 'react'

const ProductsItem = ({title, image, reviews, rating, price, desc}) => {
  return (
    <div>
      <img src={image} alt={title} />
    </div>
  )
}

export default ProductsItem
