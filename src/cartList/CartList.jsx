import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, getStoredWishList, updateStoredList } from '../utility/addToDb'; // Assume updateStoredList is a utility to update the storage
import CartWishCards from '../CartWish/CartWishCards';

const CartList = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sortedList, setSortedList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('cart');
    const allGadgets = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        const storedCartList = getStoredCartList().map(id => parseInt(id));
        const storedWishList = getStoredWishList().map(id => parseInt(id));

        const cartItems = allGadgets.filter(gadget => storedCartList.includes(Number(gadget.id)));
        const wishItems = allGadgets.filter(gadget => storedWishList.includes(Number(gadget.id)));

        setCartList(cartItems);
        setWishList(wishItems);
        setSortedList(cartItems); // Initialize the sorted list with the cart list
    }, [allGadgets]);

    const handleSortByPrice = () => {
        const sorted = [...sortedList].sort((a, b) => b.price - a.price);
        setSortedList(sorted);
    };

    const totalCartPrice = sortedList.reduce((total, item) => total + item.price, 0);
    const isCartEmpty = totalCartPrice === 0;

    const handlePurchase = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCartList([]);
        setSortedList([]);
        setIsModalOpen(false);
        navigate('/'); // Redirect to the home page
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        setSortedList(tab === 'cart' ? cartList : wishList);
    };

    // Function to handle deleting an item from the list
    const handleDelete = (id) => {
        if (activeTab === 'cart') {
            const updatedCartList = cartList.filter(gadget => gadget.id !== id);
            setCartList(updatedCartList);
            setSortedList(updatedCartList); // Update sorted list for cart view
            updateStoredList(updatedCartList, 'cart'); // Update localStorage for cart
        } else if (activeTab === 'wish') {
            const updatedWishList = wishList.filter(gadget => gadget.id !== id);
            setWishList(updatedWishList);
            setSortedList(updatedWishList); // Update sorted list for wishlist view
            updateStoredList(updatedWishList, 'wish'); // Update localStorage for wishlist
        }
    };

    return (
        <div>
            <div className="bg-purple-500 w-full mx-auto rounded-2xl h-3/6 flex flex-col text-center justify-center items-center py-24">
                <h1 className="text-5xl text-white font-bold">Dashboard</h1>
                <p className="py-6 w-7/12 text-white font-light text-slate-300">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div role="tablist" className="tabs tabs-boxed bg-transparent flex">
                    <button 
                        onClick={() => handleTabSwitch('cart')} 
                        className={`btn rounded-3xl ${activeTab === 'cart' ? 'bg-white text-purple-500' : 'bg-transparent text-white border-white'}`}
                    >
                        Cart List
                    </button>
                    <button 
                        onClick={() => handleTabSwitch('wish')} 
                        className={`btn rounded-3xl ${activeTab === 'wish' ? 'bg-white text-purple-500' : 'bg-transparent text-white border-white'}`}
                    >
                        WishList
                    </button>
                </div>
            </div>

            <div className="mt-6 flex justify-between items-center px-4">
                <div><h1 className='text-2xl font-bold'>{activeTab === 'cart' ? 'Cart' : 'Wishlist'}</h1></div>
                {activeTab === 'cart' && (
                    <div className="text-lg font-semibold">Total Price: ${totalCartPrice.toFixed(2)}</div>
                )}
                <div>
                    <button onClick={handleSortByPrice} className="btn rounded-3xl text-purple-500 font-semibold border-purple-500">Sort by Price</button>
                    {activeTab === 'cart' && (
                        <button 
                            onClick={handlePurchase} 
                            className="btn bg-purple-500 rounded-3xl text-white"
                            disabled={isCartEmpty} // Disable the button if the cart is empty
                        >
                            Purchase
                        </button>
                    )}
                </div>
            </div>

            <div className='grid grid-cols-1 mt-6'>
                {sortedList.map(gadget => (
                    <CartWishCards key={gadget.id} gadget={gadget} onDelete={handleDelete} />
                ))}
            </div>

            {/* Modal for congratulatory message after purchase */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <img className='mx-auto' src="https://i.ibb.co/PmTyPn2/Group.png" alt="Payment Successful" />
                        <h2 className="font-bold text-lg mt-4">Payment Successful</h2>
                        <p className='text-xs mt-2'>Thanks for purchasing</p>
                        <p className='text-xs mb-4'>Total: ${totalCartPrice.toFixed(2)}</p>
                        <button onClick={closeModal} className="btn bg-purple-500 text-white rounded px-4 py-2">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartList;
