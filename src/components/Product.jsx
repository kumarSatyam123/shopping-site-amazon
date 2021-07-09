import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useState } from 'react';


function Product({ id, title, price, description, category, image, rating}) {

    return (
        <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
            <p className='absolute top-2 right-3 text-xs italic text-gray-400'>{category}</p>

            <Image src={image} alt="Product" width={200} height={200} objectFit='contain' />

            <h4 className='my-3'>{title}</h4>

            <div className='flex items-center'>
                {Array(rating).fill().map((_, i) => {
                    return <StarIcon key={i} className='h-5 text-yellow-500' />
                })}
            </div>

            <p className='my-2 text-xs line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} currency='GBP' />
            </div>

            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src='https://links.papareact.com/fdw' alt='prime' />
                <p className='text-xs text-gray-500'>Free next-day delivery</p>
            </div>

            {/* {hasPrime == true ? (<div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src='https://links.papareact.com/fdw' alt='prime' />
                <p className='text-xs text-gray-500'>Free next-day delivery</p>
            </div>) : null } */}

            {/* {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src='https://links.papareact.com/fdw' alt='prime' />
                    <p className='text-xs text-gray-500'>Free next-day delivery</p>
                </div>
            )} */}

            <button className='mt-auto button'> Add To Basket </button>
        </div>
    )
}

export default Product
