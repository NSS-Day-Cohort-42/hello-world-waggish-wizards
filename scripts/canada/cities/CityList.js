import { allCities } from "./CityDataProvider.js"
import { CityComponent } from "./CityHTMLConverter.js"

const entryLog = document.querySelector(".content--left")

export const cityList= () => {
   
    const cities = allCities()
    console.log(cities)
    let CityHTMLRepresentations = ""
    for (const city of cities) {
        CityHTMLRepresentations += CityComponent(city)
    }
        entryLog.innerHTML += `
        <article class= "cities">
        <h2 class="articleHeader"> Cities </h2>
        ${CityHTMLRepresentations}
        </article> ` }