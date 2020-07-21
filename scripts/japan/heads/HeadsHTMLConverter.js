//converts one object into HTML

export const headComponent = (head) => {
    return `
    <div class ="head">${head.name}</div>
    <section class="head__hover">
    <div><img class="head__image" src="${head.image}"></div>
    <div class="head__link"><a target=_blank href="${head.link}">Click to learn more about  ${head.name}</a></div>
    </section>
    <br></br>
    `
}