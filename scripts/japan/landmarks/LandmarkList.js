import { useLandmarks } from "./LandmarkDataProvider.js"
import { landmarkComponent } from "./LandmarkHTMLConverter.js"

const entryLog = document.querySelector(".content--middle")

export const landmarkHTMLList = () => {

    
    let LandmarkHTMLRepresentations = ""
    
    const landmarks = useLandmarks ()
    for (const landmark of landmarks) {
        LandmarkHTMLRepresentations += landmarkComponent(landmark)
}

    entryLog.innerHTML += `
    <article class ="landmarks">
    <h2 class = "articleHeader"> Landmark </h2>
    ${LandmarkHTMLRepresentations}
    </article> ` }