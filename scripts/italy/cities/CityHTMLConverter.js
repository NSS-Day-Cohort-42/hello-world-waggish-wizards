export const citiesHTML = (citiesObj) => {
    return `
        <div class ="city">${citiesObj.name}</div>
        <section class="city__hover">
        <div><img class="city__image" src="${citiesObj.image}"></div>
        <div class="city__description">Description PROPERTY goes here!<div>
        </section>
        <a class= "city__link" target=_blank href="${citiesObj.URL}">Traveling to ${citiesObj.name}</a>
        <br></br>
        `
}