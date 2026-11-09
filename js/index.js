import { getCart } from "./storage.js";
import { updateCounter, renderFooter } from "./ui.js";
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

const createCard = (item) => {
    const card = document.createElement("article");
    card.classList.add("card");

    if (item.percentDiscount) {
        card.classList.add("combo-card");

        const badge = document.createElement("span");
        badge.classList.add("badge");
        badge.textContent = `${item.percentDiscount}% OFF`;
        card.appendChild(badge);
    }

    const image = document.createElement("img");
    image.src = `./${item.img.link}`;
    image.alt = item.img.alt;

    const name = document.createElement("h3");
    name.textContent = item.name;

    let priceElement;
    if (item.oldPrice) {
        priceElement = document.createElement("div");
        priceElement.classList.add("price-container");

        const oldPrice = document.createElement("span");
        oldPrice.classList.add("old-price");
        oldPrice.textContent = `$${dotsForNumber(item.oldPrice)}`;

        const currentPrice = document.createElement("span");
        currentPrice.classList.add("product-price");
        currentPrice.textContent = `$${dotsForNumber(item.price)}`;

        priceElement.appendChild(oldPrice);
        priceElement.appendChild(currentPrice);
    } else {
        priceElement = document.createElement("p");
        priceElement.classList.add("product-price");
        priceElement.textContent = `$${dotsForNumber(item.price)}`;
    }

    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "add to cart";
    btn.addEventListener("click", () => addToCart(item));

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(priceElement);
    card.appendChild(btn);

    return card;
};

const renderSection = (titleText, items, container) => {
    if (!items || items.length === 0) return;

    const title = document.createElement("h2");
    title.textContent = titleText;
    container.appendChild(title);

    const section = document.createElement("section");
    section.classList.add("products");

    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.appendChild(createCard(item));
    }

    section.appendChild(fragment);
    container.appendChild(section);
};

const renderHome = async () => {
    const mainContainer = document.getElementById("main-grid-index");
    if (!mainContainer) return;

    const [drinks, desserts, combos] = await Promise.all([
        fetchJSON("../data/drinks.json"),
        fetchJSON("../data/desserts.json"),
        fetchJSON("../data/combos.json")
    ]);

    renderSection("Our Drinks", drinks, mainContainer);
    renderSection("Our Desserts", desserts, mainContainer);
    renderSection("Kitten Combos", combos, mainContainer);
};

document.addEventListener("DOMContentLoaded", () => {
    const cart = getCart();
    updateCounter(cart);
    renderHome();
    renderFooter("./data/footer-links.json", "./")
});
