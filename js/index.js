import { drinks, desserts, combos } from "./products.js";

const dotsForNumber = (price) => {
    if (isNaN(price) || price === null || price === '') return price;
    
    return Number(price).toLocaleString('es-AR');
};

const mainContainer = document.getElementById("main-grid-index");

if(drinks.length !== 0) {
    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Our Drinks";
    mainContainer.appendChild(drinksTitle);

    const firstSection = document.createElement("section");
    firstSection.classList.add("products");

    for(const d of drinks) {
        const card = document.createElement("article");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = d.img.link;
        image.alt = d.img.alt;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = d.name;
        card.appendChild(name);

        const price = document.createElement("p");
        price.classList.add("product-price");
        price.textContent = "$" + dotsForNumber(d.price);
        card.appendChild(price);

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = "add to cart";
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

    for(const d of desserts) {
        const card = document.createElement("article");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = d.img.link;
        image.alt = d.img.alt;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = d.name;
        card.appendChild(name);

        const price = document.createElement("p");
        price.classList.add("product-price");
        price.textContent = "$" + dotsForNumber(d.price);
        card.appendChild(price);

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = "add to cart";
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

    for(const c of combos) {
        const card = document.createElement("article");
        card.classList.add("card");
        card.classList.add("combo-card");

        const badge = document.createElement("span");
        badge.classList.add("badge");
        badge.textContent = c.percentDiscount + "% OFF";
        card.appendChild(badge); //Esto es un badge "flotante" que indica el descuento aplicado en la promo correspondiente (aplicando css queda facherisimo)

        const image = document.createElement("img");
        image.src = c.img.link;
        image.alt = c.img.alt;
        card.appendChild(image);

        const name = document.createElement("h3");
        name.textContent = c.name;
        card.appendChild(name);

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("price-container");

        const oldPrice = document.createElement("span");
        oldPrice.classList.add("old-price");
        oldPrice.textContent = "$" + dotsForNumber(c.oldPrice);
        priceContainer.appendChild(oldPrice);

        const price = document.createElement("span");
        price.classList.add("product-price");
        price.textContent = "$" + dotsForNumber(c.price);
        priceContainer.appendChild(price);

        card.appendChild(priceContainer);

        const btn = document.createElement("button");
        btn.classList.add("btn");
        btn.textContent = "add to cart";
        card.appendChild(btn);

        thirdSection.appendChild(card);
    }
    mainContainer.appendChild(thirdSection);
}
