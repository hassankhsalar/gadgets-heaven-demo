import React from 'react';

const CartWishCards = ({ gadget }) => {
    const { id, name, image, price, description } = gadget || {};
    
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col items-start">
           <div className='flex'> 
            <div>
            <img className="w-64 h-40 object-cover mt-4 rounded-2xl" src={image} alt={name} />
            </div>
            <div className='justify-center flex flex-col pl-10'>
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <p className="text-gray-600 mt-2">Price: ${price}</p>
            <p className="text-gray-500 mt-2 line-clamp-3">{description}</p>
            </div>
            </div>
        </div>
    );
};

export default CartWishCards;
