import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { useFavorites } from '../../context/FavoritesContext';

const ProductsItem = ({ id, title, image, reviews, rating, price, desc }) => {
  const { favorites, dispatch } = useFavorites();
  const isFavorite = favorites.some(item => item.id === id);
  const [showFavoriteIcon, setShowFavoriteIcon] = useState(isFavorite);

  const truncate = (text, num) => (text.length > num ? text.slice(0, num) + '...' : text);

  const handleFavoriteToggle = () => {
    setShowFavoriteIcon(!showFavoriteIcon);
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { id } });
    } else {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: { id, title, image, reviews, rating, price, desc } });
    }
  };

  return (
    <div className="bg-gray-400 rounded-t overflow-hidden relative">
      <div className="text-2xl absolute right-4 top-4 z-10 cursor-pointer" onClick={handleFavoriteToggle}>
        {showFavoriteIcon ? <MdFavorite className="text-[red]" /> : <MdFavoriteBorder className="text-gray-50" />}
      </div>
      <Link to="#">
        <img title={title} src={image} className="h-[300px] select-none object-contain rounded-t transform transition duration-300 ease-in-out hover:scale-105" alt={title} />
      </Link>
      <div className="bg-white py-4 px-1">
        <h3 className="font-medium">{truncate(title, 20)}</h3>
        <p className="text-xs text-gray-500 py-2">{truncate(desc, 60)}</p>
        <div className="flex justify-between items-center mt-4">
          <span>${price}</span>
          <div className="flex items-center gap-1">
            <AiFillStar className="text-[gold]" />
            <span className="font-medium">{rating}</span>
            <a href="#" className="text-xs text-[#777]">({reviews.length} reviews)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
