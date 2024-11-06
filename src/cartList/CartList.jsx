import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../utility/addToDb';

const CartList = () => {
    const [cartList, setCartList] = useState([])
    const allGadgets = useLoaderData();
    console.log(allGadgets);
    useEffect( () => { 
        const storedCartList = getStoredCartList();
        const StoredCartListInt = storedCartList.map(id => parseInt(id));
        

        const cartList = allGadgets.filter(gadget => StoredCartListInt.includes(Number(gadget.id)));
        setCartList(cartList);
        console.log(cartList);
    } , [])
    return (
        
        <Tabs>
    <TabList>
      <Tab>Cart List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1: {cartList.length} </h2>
    </TabPanel>

    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
  
    );
};

export default CartList;