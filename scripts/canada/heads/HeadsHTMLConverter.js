export const HeadComponent = (head) => {
    return `
    <div class ="head">${head.head}</div>
    <section class="head__hover">
    <div><img class="head__image" src="${head.image}"></div>
    <div class="head__link"><a target=_blank href="${head.link}">Click to learn more about  ${head.head}</a></div>
    </section>
    <br></br>
    `
}