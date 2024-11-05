import React from 'react';

const Banner = () => {
    return (
        <div className="hero   w-11/12 mx-auto ">
  <div className="hero-content  text-center flex-col">
    <div className=" bg-purple-500 w-11/12 rounded-2xl h-3/6 flex flex-col text-center justify-center
    items-center  absolute z-0 top-0">
      <h1 className="text-5xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 w-7/12 text-white font-light text-slate-300">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn bg-white rounded-3xl text-purple-500 font-semibold">Shop Now</button>
    </div>
    <div className='relative top-72 w-7/12'>
        <img className='rounded-2xl p-4 bg-white backdrop-blur-md  bg-opacity-60 mt-14' src="https://i.ibb.co.com/Xz06xMF/banner.jpg" alt="banner" border="0" />
    </div>
  </div>
</div>
    );
};

export default Banner;