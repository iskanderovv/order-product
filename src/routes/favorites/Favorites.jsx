import { useFavorites } from '../../context/FavoritesContext';
import ProductsItem from '../products-item/ProductsItem';

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div className='max-w-[1200px] mx-auto px-4 '>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-4 md:gap-x-2 gap-x-1 lg:gap-y-8 gap-y-4 my-14 place-items-center'>
        {favorites.length > 0 ? (
          favorites.map(product => (
            <ProductsItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              price={product.price}
              desc={product.desc}
              reviews={product.reviews}
            />
          ))
        ) : (
          <p className='font-medium text-xl'>No favorite products.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
