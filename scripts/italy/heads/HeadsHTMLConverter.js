export const headsHTML = (headsObj) => {
    return `
        <div class ="head">${headsObj.name}</div>
        <div><img class="head__image" src="${headsObj.image}"></div>
        <a class= "head__link" target=_blank href="${headsObj.URL}">Click Here for more info</a>
        <br></br>
    `
}