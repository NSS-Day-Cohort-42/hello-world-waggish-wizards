//array of heads
const heads = [
    {
        name: "Frank- Walter Steinmeier",
        image: "./images/steinmeier.jpeg",
        link: "https://en.wikipedia.org/wiki/Frank-Walter_Steinmeier"
    },
    {
        name: "Joachim Gauck",
        image: "./images/gauck.jpeg",
        link: "https://en.wikipedia.org/wiki/Joachim_Gauck"
    },
    {
        name: "Horst Seehofer",
        image: "./images/seehofer.jpeg",
        link: "https://en.wikipedia.org/wiki/Horst_Seehofer"
    },
    {
        name: "Christian Wulff",
        image: "./images/wulff.jpeg",
        link: "https://en.wikipedia.org/wiki/Christian_Wulff"
    },
    {
        name: "Jens Böhrnsen",
        image: "./images/boehrnsen.jpeg",
        link: "https://en.wikipedia.org/wiki/Jens_B%C3%B6hrnsen"
}
]

export const useHeads = () => {
    return heads.slice()
}