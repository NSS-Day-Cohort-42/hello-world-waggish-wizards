export const citiesHTML = (citiesObj) => {
    return `
        <div class ="city">${citiesObj.name}</div>
        <div><img class="city__image" src="${citiesObj.image}"></div>
        <a class= "city__link" target=_blank href="${citiesObj.URL}">Click Here for more info</a>
        <br></br>
        `
}