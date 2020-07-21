const landmarks = [
    {
        name: "Mount Fuji",
        image:"./images/Fuji.jpeg",
        link:"https://www.japan-guide.com/e/e2172.html",

},
    {

        name: "Arashiyama",
        image: "./images/arashi.jpeg",
        link: "https://www.insidekyoto.com/arashiyama",

},
    {

        name: "Himeji Castle",
        image: "./images/himeji.jpeg",
        link: "https://www.japan-guide.com/e/e3501.html",

},
    {
        name: "Kiyomizu-dera",
        image: "./images/kiyo.jpeg",
        link: "https://www.kiyomizudera.or.jp/en/",
        
},
    {
        name: "Kinkaku-ji",
        image: "./images/kinkaku.jpeg",
        link: "https://www.lonelyplanet.com/japan/kansai/kyoto/attractions/kinkaku-ji/a/poi-sig/402672/356698",
    }
]

export const useLandmarks = () => {
    return landmarks.slice()
}