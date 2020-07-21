const headsArray = [
{
    name: "Sergio Mattarella",
    image:"./images/sergio.jpg",
    URL:"https://www.quirinale.it/page/en-biografia"
},
{
    name: "Pietro Grasso",
    image:"./images/pietro.jpg",
    URL:"https://www.goodcountry.org/global-vote/elections/italy/candidates/pietro-grasso/"
},
{
    name: "Giorgio Napolitano",
    image:"./images/giorgio.jpg",
    URL:"https://www.bbc.com/news/world-europe-15689553"
},
{
    name: "Carlo Azeglio Ciampi",
    image:"./images/carlo.jpg",
    URL:"https://www.britannica.com/biography/Carlo-Azeglio-Ciampi"
},
{
    name: "Nicola Mancino",
    image:"./images/nicola.jpeg",
    URL:"https://en.wikipedia.org/wiki/Nicola_Mancino"
}
]

export const headsArrayCopy = () => {
    return headsArray.slice()
}