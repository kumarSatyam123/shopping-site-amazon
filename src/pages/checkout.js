import { useSession } from "next-auth/client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
function Checkout() {
    const items = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal);
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src='https://links.papareact.com/ikj' alt='advert' width={1020} height={250} objectfit='contain'/>
                    <div className='p-5 bg-white flex flex-col space-y-10'>
                        <h1 className='text-2xl border-b pb-4'>
                            {items.length === 0 ? `Your basket is empty` : `Shopping Basket`}
                        </h1>

                        {
                            items.map((item, i) => {
                                return <CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category}
                                    image={item.image}
                                />
                            })
                        }
                    </div>
                </div>

                {/* right */}
                <div className='flex flex-col flex-grow bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                        <h2 className='whitespace-nowrap'>
                            Subtotal ({items.length} items)
                            <span className='font-bold ml-2'>
                                <Currency quantity={total} currency='GBP' />
                            </span>
                        </h2>

                        <button disabled={!session} className={`button mt-2 ${!session ? 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed' : ''}`}>
                            {!session ? `Sign in to checkout`: `Proceed to checkout`}
                        </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
