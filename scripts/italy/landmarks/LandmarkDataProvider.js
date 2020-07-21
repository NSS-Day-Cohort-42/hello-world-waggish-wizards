const landmarks = [
{
    name: "Colosseum",
    image: "./images/colosseum.jpg",
    URL: "https://www.rome.net/colosseum"
},
{
    name: "Cathedral of Santa Maria del Fiore",
    image: "./images/Cathedral.jpg",
    URL: "http://www.museumsinflorence.com/musei/cathedral_of_florence.html"
},
{
    name: "Pantheon",
    image: "./images/pantheon.jpg",
    URL: "https://www.italyguides.it/en/lazio/rome/ancient-rome/pantheon"
},
{
    name: "Trevi Fountain",
    image: "./images/treviFountain.jpg",
    URL: "https://www.rome.net/trevi-fountain"
},
{
    name: "Leaning Tower of Pisa",
    image: "./images/leaningtower.jpg",
    URL: "http://www.towerofpisa.org/"
},
]

export const landmarksCopy = () => {
    return landmarks.slice()
}