import {useHeads} from "./HeadsDataProvider.js"
import {HeadsAsHTML} from "./HeadsHTMLConverter.js"

export const HeadsHTMLList = () => {

    const contentElement = document.querySelector(".content--right")

    let headsHTML = ""

    const arrOfHeads = useHeads()

    for(const headObj of arrOfHeads) {
        headsHTML += HeadsAsHTML(headObj)
    }

    contentElement.innerHTML += `
    <article class="heads">
    <h2 class="articleHeader">Heads of State</h2>
    ${headsHTML}
    </article>
    `
}