const quotes = [
    {"quote" : "One cat just leads to another.",
    "author" : "Ernest Hemingway"},
    {"quote" : "Time spent with cats is never wasted.",
    "author" : "Sigmund Freud"},
    {"quote" : "What greater gift than the love of a cat.",
    "author" : "Charles Dickens"},
    {"quote" : "Cheeer up with cats",
    "author" : "ME"}, 
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = ` -${todaysQuote.author}-`;
// console.log()