import Image from 'next/image';
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import {useRouter} from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)
    return (
        <header>
            {/* top nav */}
            <div className="flex flex-grow bg-amazon_blue px-1 py-2 items-center">
                <div className="mt-2 flex flex-grow sm:flex-grow-0 items-center">
                    <Image onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt="logo"
                    />
                </div>

                <div className="hidden sm:flex flex-grow cursor-pointer h-10 rounded-md items-center bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 px-4 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" placeholder="Search" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link" onClick={ !session ? signIn : signOut}>
                        <p>
                            {session ? `Hello ${session.user.name}` : `Sign in`}
                        </p>
                        <p className="font-bold md:text-sm" >Account & Lists</p>
                    </div>

                    <div className="link">
                        <p>Return</p>
                        <p className="font-bold md:text-sm" >& Orders</p>
                    </div>
                        
                    <div onClick={() => router.push('/checkout')} className="link relative flex items-center">
                        <span className="absolute right-0 top-0 md:right-10 text-center bg-yellow-400 text-black rounded-full font-bold h-4 w-4" >{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline mt-2 font-bold md:text-sm" >Basket</p>
                    </div>
                </div>

            </div>
            
            {/* bottom nav */}
            <div className="bg-amazon_blue-light flex items-center text-white space-x-3 p-2 pl-6 text-sm">
                <p className="flex items-center">
                    <MenuIcon className="h-6 mr-2" />
                    <span className='hidden sm:inline-flex'>All</span>
                </p>
                <p className="text-xs sm:text-sm link">Prime Videos</p>
                <p className="text-xs sm:text-sm link">Amazon Business</p>
                <p className="text-xs sm:text-sm link">Today's Deals</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Electronics</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Food & Grocery</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Prime</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Buy Again</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="text-xs sm:text-sm link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header
