const cardArray = [
    {
        name: "bear",
        img: "img/bear.jpg"
    },
    {
        name: "cat",
        img: "img/cat.jpg"
    },
    {
        name: "deer",
        img: "img/deer.jpg"
    },
    {
        name: "dog",
        img: "img/dog.jpg"
    },
    {
        name: "fox",
        img: "img/fox.jpg"
    },
    {
        name: "hare",
        img: "img/hare.jpg"
    },
    {
        name: "lion",
        img: "img/lion.jpg"
    },
    {
        name: "panda",
        img: "img/panda.jpg"
    },
    {
        name: "rabbit",
        img: "img/rabbit.jpg"
    },
    {
        name: "bear",
        img: "img/bear.jpg"
    },
    {
        name: "cat",
        img: "img/cat.jpg"
    },
    {
        name: "deer",
        img: "img/deer.jpg"
    },
    {
        name: "dog",
        img: "img/dog.jpg"
    },
    {
        name: "fox",
        img: "img/fox.jpg"
    },
    {
        name: "hare",
        img: "img/hare.jpg"
    },
    {
        name: "lion",
        img: "img/lion.jpg"
    },
    {
        name: "panda",
        img: "img/panda.jpg"
    },
    {
        name: "rabbit",
        img: "img/rabbit.jpg"
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid02")
const resultDisplay = document.querySelector("#result")
const attemptsDisplay = document.querySelector("#attempts")
const cardsWon = []
let cardsChosen = []
let cardsChosenIds = []
let attempts = 0

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "img/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] == cardsChosen[1]) {
        showPopup("You found a match!");
        cards[optionOneId].setAttribute("src", "img/white.png");
        cards[optionTwoId].setAttribute("src", "img/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
        attempts++
    } else {
        cards[optionOneId].setAttribute("src", "img/blank.png");
        cards[optionTwoId].setAttribute("src", "img/blank.png");
        showPopup("Sorry, try again!");
        attempts++;
        attemptsDisplay.textContent = attempts;
    }

    attemptsDisplay.textContent = attempts;
    resultDisplay.textContent = cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length / 2) {
        showPopup("Congratulations! You found them all!");
        resultDisplay.textContent = attempts;
    }
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = message;
    popupContent.style.display = "block";
}

function flipCard() {
    const cardId = this.getAttribute("data-id");

    // check if the same card has been clicked twice
    if (cardsChosenIds.includes(cardId)) {
        showPopup("You clicked the same card!")
        // flip the card back to the blank image
        this.setAttribute("src", "img/blank.png");
        // remove the card from the chosen cards array and its ID from the chosen IDs array
        const index = cardsChosenIds.indexOf(cardId);
        cardsChosen.splice(index, 1);
        cardsChosenIds.splice(index, 1);
        return;
    }

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}