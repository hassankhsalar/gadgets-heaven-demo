import { json } from "react-router-dom";
import { toast } from "react-toastify";

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
 }

 const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the cart list')
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast('this gadget is added to the cart')
    }
 }


 const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        return [];
    }
 }

 const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, 'already exists in the wish list')
    }else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('this gadget is added to the WishList')
    }
 }

 const removeFromDb = (id, type) => {
    let storedList = JSON.parse(localStorage.getItem(type)) || [];
    storedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem(type, JSON.stringify(storedList));
};

const updateStoredList = (updatedList, type) => {
    // Convert the list to an array of ids (assuming each item in the list has an 'id' property)
    const updatedIds = updatedList.map(item => item.id);
    localStorage.setItem(type, JSON.stringify(updatedIds)); // Update the list in localStorage
};

 export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList, removeFromDb, updateStoredList }