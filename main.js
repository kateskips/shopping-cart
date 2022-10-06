let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "lVB",
        name: "Louis V Bag",
        price: 5000,
        desc: "Where else will you be storing that dead body?",
        img: "images/Brad+Luis+Bag+Web.jpg"
    },
    {
        id: "GB",
        name: "Game Boy",
        price: 500,
        desc: "Play the classic sh*t",
        img: "images/Gameboy.jpg"
    },
    {
        id: "G",
        name: "Globe",
        price: 250,
        desc: "Some fancy sh*t for your desk",
        img: "images/Globe-Web-1.jpg"
    },
    {
        id: "SC",
        name: "Suitcase",
        price: 150,
        desc: "A place to carry all your drug money",
        img: "images/Red-Suitecase-1.jpg"
    },
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
    return `<div id=product-id-${id} class="item">
            <img width="219" height="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>${price}</h2>
                    <div class="buttons"></div>
                    <i class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    `
    }).join(""));
};

generateShop();