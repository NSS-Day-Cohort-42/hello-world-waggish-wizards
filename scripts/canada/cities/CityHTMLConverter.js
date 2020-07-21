export const CityComponent = (city) => {
    return `
    <div class ="city">${city.city}</div>
    <section class="city__hover">
    <div><img class="city__image" src="${city.image}"></div>
    <div class="city__link"><a target=_blank href="${city.link}">Click to learn more about  ${city.city}</a></div>
    </section>
    <br></br>
    `
}