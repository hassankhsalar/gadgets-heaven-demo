import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredWishList } from '../utility/addToDb';
import CartWishCards from '../CartWish/CartWishCards';

const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        
        const wishListItems = allGadgets.filter(gadget => storedWishListInt.includes(Number(gadget.id)));
        setWishList(wishListItems);
    }, [allGadgets]);

    return (
        <div>
            <div className="bg-purple-500 w-full mx-auto rounded-2xl h-3/6 flex flex-col text-center justify-center items-center py-24">
                <h1 className="text-5xl text-white font-bold">Your Wishlist</h1>
                <p className="py-6 w-7/12 text-white font-light text-slate-300">
                    Discover the items you wish to buy in the future. Keep track of your favorites and come back any time!
                </p>
            </div>

            <div className='grid grid-cols-1 mt-6'>
                {wishList.length > 0 ? (
                    wishList.map(gadget => <CartWishCards key={gadget.id} gadget={gadget} />)
                ) : (
                    <p className="text-center mt-6 text-lg">Your wishlist is currently empty.</p>
                )}
            </div>
        </div>
    );
};

export default WishList;
