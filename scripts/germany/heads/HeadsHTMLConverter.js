//function to turn single heads object into HTML

export const HeadsAsHTML = (headObj) => {
    return `
    <div class ="head">${headObj.name}</div>
    <section class="head__hover">
    <div><img class="head__image" src="${headObj.image}"></div>
    <div class="head__link"><a target=_blank href="${headObj.link}">Click to learn more about  ${headObj.name}</a></div>
    </section>
    <br></br>
    `
    
}