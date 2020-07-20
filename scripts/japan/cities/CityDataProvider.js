const cities = [
    {name: "Tokyo"},
    {name: "Kyoto"},
    {name: "Osaka"},
    {name: "Nagasaki"},
    {name: "Akihabara"}
]

export const useCities = () => {
    return cities.slice()
}