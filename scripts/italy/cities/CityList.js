import {citiesCopy} from "./CityDataProvider.js"
import {citiesHTML} from "./CityHTMLConverter.js"

const contentElement = document.querySelector(".content--left")

export const citiesList = () => {
    let citiesHTMLRepresentation = ""
    const citiesArray= citiesCopy()

    for (const citiesObj of citiesArray) {
        citiesHTMLRepresentation += citiesHTML(citiesObj)
    }

    contentElement.innerHTML += `
    <article class = "cities">
        <h2 class ="articleHeader">Cities</h2>
        ${citiesHTMLRepresentation}
    </article>`
}