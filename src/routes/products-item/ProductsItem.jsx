import { AiFillStar } from "react-icons/ai";
import React from 'react'
import { Link } from "react-router-dom";

const ProductsItem = ({ title, image, reviews, rating, price, desc }) => {

  const truncate = (text, num) => {
    return text.length > num ? text.slice(0, num) + '...' : text;
  }


  return (
    <div className='bg-gray-400 rounded-t overflow-hidden '>
  <Link>
    <img title={title} src={image} className="h-[300px] object-contain rounded-t transform transition duration-300 ease-in-out hover:scale-105" alt={title} />
  </Link>
  <div className="bg-white py-4">
    <h3 className="font-medium"> {truncate(title, 23)} </h3>
    <p className="text-xs text-gray-500 py-2 "> {truncate(desc, 70)} </p>
    <div className="flex justify-between items-center mt-4">
      <span > ${price} </span>
      <div className="flex items-center gap-1">
        <AiFillStar className="text-[gold]" />
        <span className="font-medium">{rating}</span>
        <a href="#" className="text-xs text-[#777] ">({reviews.length} reviews)</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductsItem
