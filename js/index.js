import { getCart } from "./storage.js";
import { updateCounter } from "./ui.js";
import { addToCart } from "./shopping-cart-functions.js";

const dotsForNumber = (price) => {
    if (isNaN(price) || price === null || price === '') return price;
    
    return Number(price).toLocaleString('es-AR');
};

const fetchJSON = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error loading ${url}:`, error);
        return [];
    }
};

const renderHome = async () => {
    const mainContainer = document.getElementById("main-grid-index");
    
    const drinks = await fetchJSON("../data/drinks.json");
    const desserts = await fetchJSON("../data/desserts.json");
    const combos = await fetchJSON("../data/combos.json");

    if(drinks.length !== 0) {
        const drinksTitle = document.createElement("h2");
        drinksTitle.textContent = "Our Drinks";
        mainContainer.appendChild(drinksTitle);

        const firstSection = document.createElement("section");
        firstSection.classList.add("products");

        for(const drink of drinks) {
            const card = document.createElement("article");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = "./" + drink.img.link;
            image.alt = drink.img.alt;
            
            const name = document.createElement("h3");
            name.textContent = drink.name;
            
            const price = document.createElement("p");
            price.classList.add("product-price");
            price.textContent = "$" + dotsForNumber(drink.price);
            
            const btn = document.createElement("button");
            btn.classList.add("btn");
            btn.textContent = "add to cart";
            btn.addEventListener("click", () => addToCart(drink))
            
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(btn);
            
            firstSection.appendChild(card);
        }
        mainContainer.appendChild(firstSection);
    }

    if(desserts.length !== 0) {
        const dessertsTitle = document.createElement("h2");
        dessertsTitle.textContent = "Our Desserts";
        mainContainer.appendChild(dessertsTitle);

        const secondSection = document.createElement("section");
        secondSection.classList.add("products");

        for(const dessert of desserts) {
            const card = document.createElement("article");
            card.classList.add("card");

            const image = document.createElement("img");
            image.src = "./" + dessert.img.link;
            image.alt = dessert.img.alt;
            
            const name = document.createElement("h3");
            name.textContent = dessert.name;
            
            const price = document.createElement("p");
            price.classList.add("product-price");
            price.textContent = "$" + dotsForNumber(dessert.price);
            
            const btn = document.createElement("button");
            btn.classList.add("btn");
            btn.textContent = "add to cart";
            btn.addEventListener("click", () => addToCart(dessert))
            
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(price);
            card.appendChild(btn);

            secondSection.appendChild(card);
        }
        mainContainer.appendChild(secondSection);
    }

    if(combos.length !== 0) {
        const combosTitle = document.createElement("h2");
        combosTitle.textContent = "Kitten Combos";
        mainContainer.appendChild(combosTitle);

        const thirdSection = document.createElement("section");
        thirdSection.classList.add("products");

        for(const combo of combos) {
            const card = document.createElement("article");
            card.classList.add("card");
            card.classList.add("combo-card");

            const badge = document.createElement("span");
            badge.classList.add("badge");
            badge.textContent = combo.percentDiscount + "% OFF";
            
            const image = document.createElement("img");
            image.src = "./" + combo.img.link;
            image.alt = combo.img.alt;
            
            const name = document.createElement("h3");
            name.textContent = combo.name;
            
            const priceContainer = document.createElement("div");
            priceContainer.classList.add("price-container");
            
            const oldPrice = document.createElement("span");
            oldPrice.classList.add("old-price");
            oldPrice.textContent = "$" + dotsForNumber(combo.oldPrice);
            priceContainer.appendChild(oldPrice);
            
            const price = document.createElement("span");
            price.classList.add("product-price");
            price.textContent = "$" + dotsForNumber(combo.price);
            priceContainer.appendChild(price);
            
            const btn = document.createElement("button");
            btn.classList.add("btn");
            btn.textContent = "add to cart";
            btn.addEventListener("click", () => addToCart(combo))
            
            card.appendChild(badge); //Esto es un badge "flotante" que indica el descuento aplicado en la promo correspondiente (aplicando css queda facherisimo)
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(priceContainer);
            card.appendChild(btn);

            thirdSection.appendChild(card);
        }
        mainContainer.appendChild(thirdSection);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const cart = getCart();
    updateCounter(cart);
    renderHome();
});
