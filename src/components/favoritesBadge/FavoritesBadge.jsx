import { useFavorites } from '../../context/FavoritesContext';

const FavoritesBadge = () => {
  const { favorites } = useFavorites();
  return (
    <span className="relative inline-block">
      <span className="absolute -top-[20px] -right-[17px] flex justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
        {favorites.length}
      </span>
    </span>
  );
};

export default FavoritesBadge;
