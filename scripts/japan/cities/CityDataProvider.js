const cities = [
    {
        name: "Tokyo",
        image: "./images/tokyo.jpeg",
        link: "https://www.lonelyplanet.com/japan/tokyo",
    
},
    {
    
        name: "Kyoto",
        image: "./images/kyoto.jpeg",
        link: "https://www.lonelyplanet.com/japan/kansai/kyoto",
},

    {
        name: "Osaka",
        image: "./images/osaka.jpeg",
        link: "https://www.lonelyplanet.com/japan/kansai/osaka",
},

    {
        name: "Nagasaki",
        image: "./images/nagasaki.jpeg",
        link: "https://www.lonelyplanet.com/japan/kyushu/nagasaki",
},

    {
        name: "Akihabara",
        image: "./images/akiha.jpeg",
        link: "https://www.lonelyplanet.com/japan/tokyo/akihabara-and-around",
}
]

export const useCities = () => {
    return cities.slice()
}