import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../utility/addToDb';
import CartWishCards from '../CartWish/CartWishCards';

const CartList = () => {
    const [cartList, setCartList] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const allGadgets = useLoaderData();
    
    useEffect(() => {
        const storedCartList = getStoredCartList();
        const StoredCartListInt = storedCartList.map(id => parseInt(id));
        
        const cartItems = allGadgets.filter(gadget => StoredCartListInt.includes(Number(gadget.id)));
        setCartList(cartItems);
        setSortedList(cartItems); // Initialize the sorted list with the original cart list
    }, [allGadgets]);
    
    const handleSortByPrice = () => {
        const sorted = [...sortedList].sort((a, b) => b.price - a.price);
        setSortedList(sorted);
    };

    const totalCartPrice = sortedList.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <div className="bg-purple-500 w-full mx-auto rounded-2xl h-3/6 flex flex-col text-center justify-center items-center py-24">
                <h1 className="text-5xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="py-6 w-7/12 text-white font-light text-slate-300">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div role="tablist" className="tabs tabs-boxed bg-transparent flex">
                    <a role="tab" className="btn rounded-3xl text-purple-500 font-semibold">Cart List</a>
                    <a role="tab" className="btn rounded-3xl tab-active">WishList</a>
                </div>
            </div>

            <div className="mt-6 flex justify-between items-center px-4">
                <div><h1 className='text-2xl font-bold'>Cart</h1></div>
                <div className="text-lg font-semibold">Total Price: ${totalCartPrice.toFixed(2)}</div>
                <div>
                <button onClick={handleSortByPrice} className="btn rounded-3xl text-purple-500 font-semibold border-purple-500">Sort by Price</button>
                <button className="btn bg-purple-500 rounded-3xl text-white rounded">Purchase</button>
                </div>
            </div>

            <div className='grid grid-cols-1 mt-6'>
                {sortedList.map(gadget => <CartWishCards key={gadget.id} gadget={gadget} />)}
            </div>
        </div>
    );
};

export default CartList;
