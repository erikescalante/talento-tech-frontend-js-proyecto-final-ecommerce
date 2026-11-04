export const updateCounter = (cart) => {
    const counter = document.getElementById("cart-counter");
    if (counter) counter.textContent = cart.length || "";
};

export const showMessage = (text) => alert(text);