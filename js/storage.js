export const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

export const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

export const emptyCartStorage = () => localStorage.removeItem("cart");