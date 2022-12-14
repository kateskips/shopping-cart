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
        desc: "Play the classic sh*t, not those shitty games your friends make you play",
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

let basket = JSON.parse(localStorage.getItem("data")) ||[];
//JSON.parse(localStorage.getItem("data")) || []


let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x)=> x.id === id) || []
        return `<div id=product-id-${id} class="item">
            <img width="219" height="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons"></div>
                    <i onClick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${search.item === undefined? 0: search.item }</div>
                    <i onClick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    `
    }).join(""));
};

generateShop();


let increment = (id) => {
    let selectedItem = id
    let search = basket.find((x) => x.id === selectedItem.id)
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    } else {
        search.item += 1;
    }

    //console.log(basket)
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket))
}
let decrement = (id) => {
    let selectedItem = id
    let search = basket.find((x) => x.id === selectedItem.id)

    if (search === undefined) return
    else if (search.item === 0 ) return
    else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket))
    //console.log(basket)
    update(selectedItem.id)
    basket = basket.filter((x) => x.item !== 0)
   
}
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    //console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation()
}

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
}


calculation();
