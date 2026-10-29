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

const mainContainer = document.getElementById("main-grid-index");

if(drinks.length !== 0) {
    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Our Drinks";
    mainContainer.appendChild(drinksTitle);

    const firstSection = document.createElement("section");
    firstSection.classList.add("products");

    for(const   d of drinks) {
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
