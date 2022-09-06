const submit = document.getElementById('submit');

submit.addEventListener('click', newQuote);

const quotes = {
    "- Walt Disney" : "'The way to get started is to quit talking and begin doing'",
    "- Aristotle" : "'It is during our darkest moments that we must focus to see the light'",
    "- Maya Angelou" : "'You will face many defeats in life, but never let yourself be defeated'",
    "- Abraham Lincoln" : "'In the end, it's not the years in your life that count. It's the life in your years'",
    "- Babe Ruth" : "'Never let the fear of striking out keep you from playing the game'",
    "- Mother Teresa" : "'In this life we cannot do great things. We can only do small things with great love'",
    "-Albert Einstein" : "'Only a life lived for others is a life worthwhile'",
    "- Marcus Aurelius" : "'You don’t have to turn this into something. It doesn’t have to upset you'",
    "- Marcus Aurelius" : "'Think of yourself as dead. You have lived your life. Now take what’s left and live it properly'",
    "- Marcus Aurelius" : "'Waste no more time arguing what a good man should be. Be one'"
}

function newQuote() {
    let authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)]
    const thequote = quotes[author];
    
    document.getElementById('quote').innerHTML = thequote;
    document.getElementById('author').innerHTML = author;
}