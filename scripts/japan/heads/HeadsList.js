import { useHeads } from "./HeadsDataProvider.js"
import { headComponent } from "./HeadsHTMLConverter.js"

const entryLog = document.querySelector(".content--right")

export const headHTMLList = () => {

    
    let HeadHTMLRepresentations = ""
    
    const heads = useHeads ()
    for (const head of heads) {
        HeadHTMLRepresentations += headComponent(head)
}

    entryLog.innerHTML += `
    <article class ="heads">
    <h2 class = "articleHeader"> Heads of State </h2>
    ${HeadHTMLRepresentations}
    </article> ` }