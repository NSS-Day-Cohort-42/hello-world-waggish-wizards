//converts one object into HTML

export const cityAsHTML = (cityObj) => {
    return `
    
    <div class="city">${cityObj.name}</div>
    <div><img class="city__image" src="${cityObj.image}"/><div>
    <a class="city__link" target=_blank href="${cityObj.link}">Click Here for more info</a>
    <br></br>
    `
}