export const updateCounter = (cart) => {
    const counter = document.getElementById("cart-counter");
    if (counter) counter.textContent = cart.length || "";
};

export const showMessage = (text) => alert(text);

export const renderFooter = async (footerId, jsonPath, imgPath) => {
    const footerContainer = document.getElementById(footerId);
    if (!footerContainer) return;

    try {
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const links = await response.json();

        // Limpiar contenido previo si fuera necesario
        footerContainer.innerHTML = "";

        const parragraph = document.createElement("p");
        parragraph.textContent = "Website created by Erik Escalante for the Front-End JS course.";
        parragraph.classList.add("parragraph")

        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        ul.classList.add("footer-list");

        const fragment = document.createDocumentFragment();

        for (const link of links) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            
            if(link.url){
                a.href = link.url;
                a.target = "_blank";
            }

            const img = document.createElement("img");
            img.src = `${imgPath}${link.img.src}`;
            img.alt = `${link.img.alt}`;
            img.classList.add("footer-icon");

            a.appendChild(img);
            li.appendChild(a);
            fragment.appendChild(li);
        }

        ul.appendChild(fragment);
        nav.appendChild(ul);
        footerContainer.appendChild(parragraph);
        footerContainer.appendChild(nav);

    } catch (error) {
        console.error("Error rendering the footer:", error);
    }
}