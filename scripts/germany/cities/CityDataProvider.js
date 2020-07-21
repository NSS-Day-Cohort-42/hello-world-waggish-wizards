//array of city objects

const cities = [
    {
        name: "Berlin",
        image: "./images/berlin.jpeg",
        link: "https://www.visitberlin.de/en"
    },
    {
        name: "Frankfurt",
        image: "./images/frankfurt.jpeg",
        link: "https://www.frankfurt-tourismus.de/en/Discover-Experience/Best-of-Frankfurt2"
    },
    {
        name: "Cologne",
        image: "./images/cologne.jpeg",
        link: "https://www.cologne-tourism.com/"
    },
    {
        name: "Munich",
        image: "./images/munich.jpeg",
        link: "https://www.muenchen.de/int/en.html"

    },

    {
        name: "Dresden",
        image: "./images/dresden.jpg",
        link: "https://www.dresden.de/en/tourism/tourism.php"
    
    }


]

//function to make copy of array
export const citiesArray = () => {
    return cities.slice()
}
