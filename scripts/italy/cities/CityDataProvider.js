const cities = [
{
    name: "Rome",
    image: "./images/Rome.jpg",
    URL:"https://www.rome.net/"
},
{
    name: "Venice",
    image:"./images/Venice.jpg",
    URL:"https://www.veneziaunica.it/en/content/visit-venice-0"
},
{
    name: "Florence",
    image:"./images/Florence.jpg",
    URL:"https://www.visitflorence.com/"
},
{
    name: "Milan",
    image:"./images/Milan.jpg",
    URL:"https://theculturetrip.com/europe/italy/articles/13-reasons-why-everyone-should-visit-milan-at-least-once-in-their-lifetime/"
},
{
    name: "Naples",
    image:"./images/Naples.jpg",
    URL:"https://www.visitnaples.eu/en"
}
]

export const citiesCopy = () => {
    return cities.slice()
}