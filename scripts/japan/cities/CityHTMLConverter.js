//converts one object into HTML

export const cityComponent = (city) => {
    return `
    <div class ="city">${city.name}</div>
    <section class="city__hover">
    <div><img class="city__image" src="${city.image}"></div>
    <div class="city__link"><a target=_blank href="${city.link}">Click to learn more about  ${city.name}</a></div>
    </section>
    <br></br>
    `
}