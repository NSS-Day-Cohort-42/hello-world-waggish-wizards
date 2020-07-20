import { useCities } from "./CityDataProvider.js"
import { cityComponent } from "./CityHTMLConverter.js"

const entryLog = document.querySelector(".content--left")

export const cityHTMLList = () => {

    
    let CityHTMLRepresentations = ""
    
    const cities = useCities()
    for (const city of cities) {
        CityHTMLRepresentations += cityComponent(city)
}

    entryLog.innerHTML += `
    <article class ="cities">
    <h2 class = "articleHeader"> Cities </h2>
    ${CityHTMLRepresentations}
    </article> ` }