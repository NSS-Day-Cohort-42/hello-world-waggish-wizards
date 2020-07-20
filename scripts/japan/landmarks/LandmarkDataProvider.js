const landmarks = [
    {name: "Mount Fuji"},
    {name: "Arashiyama"},
    {name: "Himeji Castle"},
    {name: "Kiyomizu-dera"},
    {name: "Kinkaku-ji"}
]

export const useLandmarks = () => {
    return landmarks.slice()
}