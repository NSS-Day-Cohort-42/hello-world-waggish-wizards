export const headsHTML = (headsObj) => {
    return `
    <div class ="head">${headsObj.name}</div>
    <section class="head__hover">
    <div><img class="head__image" src="${headsObj.image}"></div>
    <div class="head__link"><a target=_blank href="${headsObj.URL}">Click to learn more about  ${headsObj.name}</a></div>
    </section>
    <br></br>
    `
}