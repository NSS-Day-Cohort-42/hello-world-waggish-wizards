const landmarks = [
    {name: "Colosseum"},
    {name: "Cathedral of Santa Maria del Fiore"},
    {name: "Pantheon"},
    {name: "Trevi Fountain"},
    {name: "Leaning Tower of Pisa"},
]

export const landmarksCopy = () => {
    return landmarks.slice()
}