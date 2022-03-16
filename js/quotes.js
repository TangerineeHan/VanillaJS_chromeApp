const quotes = [
    {
        quotes: "Believe in yourself ",
        author: "A",
    },
    {
        quotes: "Believe in Follow your heart  ",
        author: "B",
    },
    {
        quotes: "Don't beat yourself up (자책하지 마세요)",
        author: "C",
    },
    {
        quotes: "Live positive",
        author: "D",
    },
    {
        quotes: "If not now, then when?",
        author: "E",
    },
    {
        quotes: "Respect individual",
        author: "F",
    },
    {
        quotes: "Time is gold",
        author: "G",
    },
    {
        quotes: "Your success is up to your efforts",
        author: "H",
    },
    {
        quotes: "Love what you do",
        author: "I",
    },
    {
        quotes: "Time is flying never to return ",
        author: "J",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
