import { 
    saveCart,
    getCart,
    emptyCartStorage
 } from "./storage.js";

 import {
    updateCounter,
    showMessage
} from "./ui.js"

export const addToCart = (product) => {
    const cart = getCart();
    cart.push(product);
    
    saveCart(cart);
    updateCounter(cart);
}

export const deleteProduct = (index) => {
    const cart = getCart();
    cart.splice(index, 1);

    saveCart(cart);
    updateCounter();
}

export const emptyCart = () => {
    emptyCartStorage();
    updateCounter([])
}