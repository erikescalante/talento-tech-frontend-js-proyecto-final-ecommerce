const drinks = [
    {
        id: 1, 
        img: {
            link: "../img/cappuccino.jpeg", 
            alt: "cappuccino image"
        }, 
        name: "CAPPUCCINO", 
        price: 9500
    },
    {
        id: 2, 
        img: {
            link: "../img/espresso.jpg", 
            alt: "espresso image"
        }, 
        name: "ESPRESSO", 
        price: 8000
    },
    {
        id: 3, 
        img: {
            link: "../img/caramel-latte.jpg", 
            alt: "caramel latte image"
        }, 
        name: "CARAMEL LATTE", 
        price: 8600
    },
    {
        id: 4, 
        img: {
            link: "../img/te.webp", 
            alt: "tea image"
        }, 
        name: "TEA", 
        price: 5600
    },
    {
        id: 5, 
        img: {
            link: "../img/chocolate-caliente.png", 
            alt: "chocolate milk image"
        }, 
        name: "CHOCOLATE MILK", 
        price: 6000
    },
    {
        id: 6, 
        img: {
            link: "../img/americano.jpg", 
            alt: "americano coffee image"
        }, 
        name: "AMERICANO", 
        price: 7600
    }
];

const desserts = [
    {
        id: 1, 
        img: {
            link: "../img/churros.jpeg", 
            alt: "churros image"
        }, 
        name: "CHURROS X6", 
        price: 8200
    },
    {
        id: 2, 
        img: {
            link: "../img/brownie.jpg", 
            alt: "brownie image"
        }, 
        name: "BROWNIE", 
        price: 4200
    },
    {
        id: 3, 
        img: {
            link: "../img/flan.jpg", 
            alt: "flan image"
        }, 
        name: "FLAN", 
        price: 3600
    },
    {
        id: 4, 
        img: {
            link: "../img/chocotorta.jpg", 
            alt: "chocotorta image"
        }, 
        name: "CHOCOTORTA", 
        price: 4600
    },
    {
        id: 5, 
        img: {
            link: "../img/tiramisu.jpg", 
            alt: "tiramisu image"
        }, 
        name: "TIRAMISU", 
        price: 4200
    },
    {
        id: 6, 
        img: {
            link: "../img/bread-pudding.jpg", 
            alt: "bread pudding image"
        }, 
        name: "BREAD PUDDING", 
        price: 3600
    }
];

const combos = [
    {
        id: 1, 
        img: {
            link: "../img/cafe-medialunas.png", 
            alt: "coffee and croissant combo"
        }, 
        name: "COFFEE & 2 CROISSANTS", 
        oldPrice: 12499,
        price: 11000,
        percentDiscount: 15
    },
    {
        id: 2, 
        img: {
            link: "../img/cappuccino-and-brownie.png", 
            alt: "coffee and brownie combo"
        }, 
        name: "COFFEE & BROWNIE", 
        oldPrice: 14000,
        price: 12000,
        percentDiscount: 15
    },
    {
        id: 3, 
        img: {
            link: "../img/chocolate-churros.jpg", 
            alt: "chocolate and churros combo"
        }, 
        name: "CHOCOLATE & 3 CHURROS", 
        oldPrice: 11200,
        price: 10000,
        percentDiscount: 10
    }
];

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
        price.textContent = "$" + d.price;
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
        price.textContent = "$" + d.price;
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
        oldPrice.textContent = "$" + c.oldPrice;
        priceContainer.appendChild(oldPrice);

        const price = document.createElement("span");
        price.classList.add("product-price");
        price.textContent = "$" + c.price;
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