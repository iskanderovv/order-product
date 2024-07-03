import { useEffect, useState } from 'react';
import axiosBase from '../../api';
import ProductsItem from '../products-item/ProductsItem';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataLoad = async () => {
      try {
        const res = await axiosBase.get('/products');
        setData(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    dataLoad();
  }, []);

  console.log(data[0]);

  return (
    <div className='max-w-[1200px] mx-auto px-4 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 my-14 place-items-center'>
        {data?.map(product => (
          <ProductsItem
            key={product.id}
            image={product.thumbnail}
            title={product.title}
            rating={product.rating}
            price={product.price}
            desc={product.description}
            reviews={product.reviews}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
