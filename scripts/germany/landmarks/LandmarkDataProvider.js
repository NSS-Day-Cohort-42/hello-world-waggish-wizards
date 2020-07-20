//array of landmark objects
const landmarks = [

    {name: "Berlin Wall"},
    {name: "Neuschwanstein Castle"},
    {name: "Heidelberg Castle"},
    {name: "Reichstag"},
    {name: "Brandenburg Gate"}
]

//function to make copy of landmarka rray
export const useLandmarks = () => {
    return landmarks.slice()
}