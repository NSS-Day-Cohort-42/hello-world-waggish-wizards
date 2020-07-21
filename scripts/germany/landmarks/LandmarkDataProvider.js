//array of landmark objects
const landmarks = [

    {
        name: "Berlin Wall",
        image:"./images/berlinwall.jpeg",
        link:"https://www.visitberlin.de/en/berlin-wall"
    },
    {
        name: "Neuschwanstein Castle",
        image: "./images/neucastle.jpeg",
        link: "https://www.neuschwanstein.de/englisch/tourist/"
    },
    {
        name: "Heidelberg Castle",
        image:"./images/heidelberg.jpeg",
        link: "https://www.schloss-heidelberg.de/en/home"
    },
    {
        name: "Reichstag",
        image:"./images/reichstag.jpeg",
        link:"https://www.visitberlin.de/en/reichstag-in-berlin"
    },
    {
        name: "Brandenburg Gate",
        image:"./images/brandgate.jpeg",
        link:"https://www.visitberlin.de/en/brandenburg-gate"
    }
]

//function to make copy of landmarka rray
export const useLandmarks = () => {
    return landmarks.slice()
}