let items = [
    {image: "src/tea1.jpg", price: 25, name: "Lemon Tea", id: 111333},
    {image: "src/tea2.jpg", price: 40, name: "9:00 PM Tea", id: 111334},
    {image: "src/tea3.jpg", price: 45, name: "Matcha Box", id: 111335},
    {image: "src/tea4.jpg", price: 30, name: "Chocolate Tea", id: 111336},
    {image: "src/tea5.jpg", price: 20, name: "Winter Chai", id: 111337},
    {image: "src/tea6.jpg", price: 25, name: "Butterscotch", id: 111338},
    {image: "src/tea7.jpg", price: 20, name: "Mint Teabags", id: 111339},
];

let container = document.getElementById("container");

function fillContainer() {
    for (let i = 0; i < items.length; ++i) {
        let div = document.createElement("div");
        div.className += "product";
        let img = document.createElement("img");
        img.src = items[i].image;
        img.style.width = "18rem";
        img.style.height = "18rem";
        let name = document.createElement("h3");
        name.innerHTML = items[i].name;
        name.style.marginTop = "2rem"
        let price = document.createElement("h2");
        price.className += "price";
        price.innerHTML = "$ " + items[i].price;
        let icon = document.createElement("i");
        icon.className += "material-icons";
        icon.innerHTML = "shopping_cart";

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(icon);

        container.appendChild(div);
    }
}

let elements = document.getElementById("elements");

function createTable() {
    let table = document.createElement("table");
    table.classList.add("pricelist-table");

    let tableHead = document.createElement("tr");
    tableHead.classList.add("table-header");
    let tableId = document.createElement("td");
    tableId.innerHTML = "ID";
    let tableName = document.createElement("td");
    tableName.innerHTML = "Наименование";
    let tablePrice = document.createElement("td");
    tablePrice.innerHTML = "Цена";
    tableHead.appendChild(tableId);
    tableHead.appendChild(tableName);
    tableHead.appendChild(tablePrice);

    table.appendChild(tableHead);

    for (let i = 0; i < items.length; i++) {
        let newTr = document.createElement("tr");

        let newId = document.createElement("td");
        newId.innerHTML = items[i].id;

        let newName = document.createElement("td");
        newName.innerHTML = items[i].name;

        let newPrice = document.createElement("td");
        newPrice.innerHTML = items[i].price;

        newTr.appendChild(newId);
        newTr.appendChild(newName);
        newTr.appendChild(newPrice);

        table.appendChild(newTr);
    }

    elements.appendChild(table);
}