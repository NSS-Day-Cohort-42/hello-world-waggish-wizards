//converts one object into HTML

export const cityAsHTML = (cityObj) => {
    return `
    <div class ="city">${cityObj.name}</div>
    <section class="city__hover">
    <div><img class="city__image" src="${cityObj.image}"></div>
    <div class="city__link"><a target=_blank href="${cityObj.link}">Click to learn more about  ${cityObj.name}</a></div>
    </section>
    <br></br>
    `
}