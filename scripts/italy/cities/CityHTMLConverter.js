export const citiesHTML = (citiesObj) => {
    return `
        <div class ="city">${citiesObj.name}</div>
        <div><img class="city__image" src="${citiesObj.image}"></div>
        <div class="city__description">Description PROPERTY goes here!<div>
        <a class= "city__link" target=_blank href="${citiesObj.URL}">Traveling to ${citiesObj.name}</a>
        <br></br>
        `
}