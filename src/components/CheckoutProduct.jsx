import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, description, category, image}) {
    const dispatch = useDispatch();
    const addItemsToBasket = () => {
        const product = {
            id, title, price, description, category, image
        }

        dispatch(addToBasket(product));
    }

    const removeItemsFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} alt='product' width={150} height={150} objectFit='contain' />

            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <p className='text-xs line-clamp-3 my-2' >{description}</p>
                <Currency quantity={price} currency="GBP" />
            </div>

            <div className='flex flex-col justify-self-end space-y-2 my-auto'>
                <button onClick={addItemsToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemsFromBasket} className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
