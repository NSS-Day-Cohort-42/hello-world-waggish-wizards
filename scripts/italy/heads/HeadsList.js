import { headsArrayCopy } from "./HeadsDataProvider.js";
import {headsHTML} from "./HeadsHTMLConverter.js";

const contentElement = document.querySelector(".content--right")

export const headsList = () => {
    let headsHTMLRepresentation = ""
    const headsArray = headsArrayCopy()

    for (const headsObj of headsArray) {
    headsHTMLRepresentation += headsHTML(headsObj)
    }

    contentElement.innerHTML += `
    <article class="heads">
            <h2 class="articleHeader">Heads of State</h2>
            ${headsHTMLRepresentation}
    </article>
    `
}