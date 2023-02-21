// Variables
let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")
const quotes = [{
    quote: `“Be yourself; everyone else is already taken.”`,
    person: ` Oscar Wilde`
}, {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    person: ` Albert Einstein`
}, {
    quote: `“So many books, so little time.”`,
    person: ` Frank Zappa`
}, {
    quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”`,
    person: ` William W. Purkey`
}, {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    person: ` Robert Frost`
}, {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    person: ` Maya Angelou`
}, {
    quote: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    person: ` Oscar Wilde`
}, {
    quote: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
    person: ` Martin Luther King Jr.`
}, {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    person: ` Mahatma Gandhi`
}, {
    quote: `“Without music, life would be a mistake.”`,
    person: ` Friedrich Nietzsche`
    },]

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})

