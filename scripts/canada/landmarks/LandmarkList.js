import { allLandmarks } from "./LandmarkDataProvider.js"
import { LandmarkComponent } from "./LandmarkHTMLConverter.js"

const entryLog = document.querySelector(".content--middle")

export const landmarkList= () => {
   
    const landmarks = allLandmarks()
    console.log(landmarks)
    let LandmarkHTMLRepresentations = ""
    for (const landmark of landmarks) {
        LandmarkHTMLRepresentations += LandmarkComponent(landmark)
    }
        entryLog.innerHTML += `
        <article class= "landmarks">
        <h2 class="articleHeader"> Landmarks </h2>
        ${LandmarkHTMLRepresentations}
        </article> ` }