const cardArray = [
    {
        name: "fries",
        img: "img/fries.png"
    },

    {
        name: "cheeseburger",
        img: "img/cheeseburger.png",
    },

    {
        name: "hotdog",
        img: "img/hotdog.png",
    },

    {
        name: "ice-cream",
        img: "img/ice-cream.png",
    },

    {
        name: "milkshake",
        img: "img/milkshake.png",
    },

    {
        name: "pizza",
        img: "img/pizza.png",
    },

    {
        name: "fries",
        img: "img/fries.png"
    },

    {
        name: "cheeseburger",
        img: "img/cheeseburger.png",
    },

    {
        name: "hotdog",
        img: "img/hotdog.png",
    },

    {
        name: "ice-cream",
        img: "img/ice-cream.png",
    },

    {
        name: "milkshake",
        img: "img/milkshake.png",
    },

    {
        name: "pizza",
        img: "img/pizza.png",
    }
];

cardArray.sort(() => 0.5 - Math.random())   // shortcut to shuffle an array randomly

const gridDisplay = document.querySelector("#grid")

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "img/blank.png")
        card.setAttribute("data-id", i)
        gridDisplay.append(card)
    }
}

createBoard()

// 41:36