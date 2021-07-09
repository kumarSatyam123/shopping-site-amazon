import Product from "./Product";
import { useState} from 'react';


const MAX_RATING = 5;
const MIN_RATING = 1;

function ProductFeed({ products }) {

    const [rating, setRating] = useState(Math.floor(Math.random() + (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
            {products.slice(0,4).map(({ id, title, price, description, category, image }) => {

                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                )
            })}

            <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="product-banner" />

            <div className='md:col-span-2'>
                {products.slice(4, 5).map(({ id, title, price, description, category, image }) => {

                    return (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            rating={rating}
                        />
                    )
                })}
            </div>

            {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => {

                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                )
            })}
        </div>
    )
}

export default ProductFeed
