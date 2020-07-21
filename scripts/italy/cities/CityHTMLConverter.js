export const citiesHTML = (citiesObj) => {
    return `
        <div class ="city">${citiesObj.name}</div>
        <section class="city__hover">
        <div><img class="city__image" src="${citiesObj.image}"></div>
        <div class="city__link"><a target=_blank href="${citiesObj.URL}">Click to learn more about traveling to ${citiesObj.name}</a></div>
        </section>
        <br></br>
        `
}