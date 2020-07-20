import {citiesArray} from "./CityDataProvider.js"
import {cityAsHTML} from "./CityHTMLConverter.js"


//function that iterates through array of objects and returns HTML list
export const citiesHTMLList = () => {

    const contentElement = document.querySelector(".content--left")

    //array of cities using copy function

    const cities = citiesArray()

    //HTML string to be filled by looping

    let citiesHTMLReps = ""

    //loop through cities array
    for(const cityObj of cities) {
        citiesHTMLReps += cityAsHTML(cityObj)
    }

    contentElement.innerHTML += 
        `
        <article class="cities">
            <h2 class="articleHeader">Cities</h2>
                ${citiesHTMLReps}
        </article>
    
        `




}
