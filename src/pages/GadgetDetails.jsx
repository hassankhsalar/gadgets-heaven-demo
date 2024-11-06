import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToStoredCartList, addToStoredWishList } from '../utility/addToDb';

const GadgetDetails = () => {
    const { id } = useParams(); 
    const data = useLoaderData(); 
    const gadget = data.find(item => item.id === id);
    const handleAddToCart = (id) => {
        addToStoredCartList(id);
    }
    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
    }

    if (!gadget) {
        return <div>Gadget not found.</div>;
    }

    const { name, image, price, description, specification, availability, rating } = gadget;

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 relative">
            <div className="text-white h-64 w-full bg-purple-500 rounded-3xl absolute top-0 text-center">
                <h2 className="mt-20 text-3xl font-semibold">Product Details</h2>
                <p className="font-light text-slate-300">
                    Explore the latest gadgets that will take your experience to the next level.
                </p>
            </div>
                
            <div className="bg-base-100 shadow-xl mt-64 flex">
                <div className="w-4/5">
                    <img className="w-full" src={image} alt={name} />
                </div>
                <div className="w-full p-6">
                    <h2 className="card-title text-2xl font-semibold mb-2">{name}</h2>
                    <p className="text-lg mb-4">Price: $ {price}</p>
                    <button 
                        className={`p-2 px-4 rounded ${availability ? 'bg-green-500' : 'bg-red-500'} text-white`}
                    >
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </button>
                    
                    <p className="mt-4">{description}</p>
                    
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Specifications:</h3>
                        <ul className="list-decimal ml-6 mt-2">
                            {specification.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold"> Rating:</h3>
                        <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            value={rating}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p className="text-gray-600 text-sm mt-1 ml-3">{rating.toFixed(1)}</p>
                        </div>
                        <div className='items-center flex gap-2'>
                            <button onClick={() => handleAddToCart(id)} className='btn bg-purple-500 text-white'>
                                Add to Cart <FontAwesomeIcon className=' rounded-full p-1' icon={faCartShopping} />
                            </button>
                        <button onClick={() => handleAddToWishList(id)} className="btn rounded-full border-1 border-gray-300">
                        <FontAwesomeIcon className='bg-slate-50 rounded-full p-1' icon={faHeart} />
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
