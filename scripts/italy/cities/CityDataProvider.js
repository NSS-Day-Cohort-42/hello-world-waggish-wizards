const cities = [
    {name: "Rome"},
    {name: "Venice"},
    {name: "Florence"},
    {name: "Milan"},
    {name: "Naples"}
]

export const citiesCopy = () => {
    return cities.slice()
}