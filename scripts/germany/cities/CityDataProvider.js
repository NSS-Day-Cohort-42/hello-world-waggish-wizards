//array of city objects

const cities = [
    {name: "Berlin"},
    {name: "Frankfurt"},
    {name: "Cologne"},
    {name: "Munich"},
    {name: "Dresden"}


]

//function to make copy of array
export const citiesArray = () => {
    return cities.slice()
}
