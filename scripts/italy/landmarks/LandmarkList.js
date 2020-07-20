import {landmarksCopy} from "./LandmarkDataProvider.js"
import {landmarksHTML} from "./LandmarkHTMLConverter.js"

const contentElement = document.querySelector(".content--middle")

export const landmarkList = () => {
    let landmarkHtMLRepresentation = ""
    const landmarkArray = landmarksCopy()

    for (const landmarkObj of landmarkArray) {
        landmarkHtMLRepresentation += landmarksHTML(landmarkObj)
    }

    contentElement.innerHTML += `
    <article class = "landmarks">
        <h2 class=articleHeader">Landmarks</h2>
            ${landmarkHtMLRepresentation}
    </article`
}