import {useLandmarks} from "./LandmarkDataProvider.js"
import {LandmarkAsHTML} from "./LandmarkHTMLConverter.js"

export const landmarkHTMLList = () => {
    const contentElement = document.querySelector(".content--middle")

    let landmarkHTMLReps = ""

    const landmarkArray = useLandmarks()

    for(const landmarkObj of landmarkArray) {
        landmarkHTMLReps += LandmarkAsHTML(landmarkObj)
    }
    contentElement.innerHTML += 
    `
    <article class="landmarks">
        <h2 class="articleHeader">Landmarks</h2>
               ${landmarkHTMLReps}
    </article>
    `

}
