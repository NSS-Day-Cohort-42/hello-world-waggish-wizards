//converts one object into HTML

export const headComponent = (head) => {
    return `
    
    <div class="city">${head.name}</div>
    <div><img class="head__image" src="${head.image}"/></div>
    <a class="head__link" target=_blank href="${head.link}">Click For More Info</a>
    <br></br>
    `
}