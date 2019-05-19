let items = [
    {image: "src/tea1.jpg", price: 25, name: "Lemon Tea"},
    {image: "src/tea2.jpg", price: 40, name: "9:00 PM Tea"},
    {image: "src/tea3.jpg", price: 45, name: "Matcha Box"},
    {image: "src/tea4.jpg", price: 30, name: "Chocolate Tea"},
    {image: "src/tea5.jpg", price: 20, name: "Winter Chai"},
    {image: "src/tea6.jpg", price: 25, name: "Butterscotch"},
    {image: "src/tea7.jpg", price: 20, name: "Mint Teabags"},
];

let container = document.getElementById("container");

function fillContainer() {
    for (let i = 0; i < items.length; ++i) {
        let div = document.createElement("div");
        div.className += "product";
        let img = document.createElement("img");
        img.src=items[i].image;
        img.style.width = "18rem";
        img.style.height = "18rem";
        let name = document.createElement("h3");
        name.innerHTML = items[i].name;
        name.style.marginTop="2rem"
        let price = document.createElement("h2");
        price.className+="price";
        price.innerHTML = "$ "+items[i].price;
        let icon=document.createElement("i");
        icon.className+="material-icons";
        icon.innerHTML="shopping_cart";

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(icon);

        container.appendChild(div);
    }
}