const Heads = [
    
    {head: "Queen Elizabeth II",
     image: "./images/Queen_of_canada.jpg",
     link: "https://www.canada.ca/en/canadian-heritage/services/royal-family/queen.html"},

    {head: "Justin Trudeau",
     image: "./images/Justin.jpg",
     link: "https://pm.gc.ca/en/prime-minister-justin-trudeau"},

    {head: "Stephen Harper",
     image: "./images/stephen-harper.jpg",
     link: "https://www.britannica.com/biography/Stephen-Harper"},

    {head: "Paul Martin",
     image: "./images/Paul-Martin.jpg",
     link: "https://www.britannica.com/biography/Paul-Martin"},

    {head: "Jean Chrétien",
     image: "./images/Jean.jpg",
     link: "https://www.britannica.com/biography/Jean-Chretien"}
  
]


export const allHeads = () => {
  return Heads.slice()   
}
