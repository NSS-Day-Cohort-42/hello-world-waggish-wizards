import { allHeads } from "./HeadsDataProvider.js"
import { HeadComponent } from "./HeadsHTMLConverter.js"

const entryLog = document.querySelector(".content--right")

export const headList= () => {
   
    const heads = allHeads()
    console.log(heads)
    let HeadHTMLRepresentations = ""
    for (const head of heads) {
        HeadHTMLRepresentations += HeadComponent(head)
    }
        entryLog.innerHTML += `
        <article class= "heads">
        <h2 class="articleHeader"> Heads of State </h2>
        ${HeadHTMLRepresentations}
        </article> ` }