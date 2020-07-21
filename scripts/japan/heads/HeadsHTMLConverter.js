//converts one object into HTML

export const headComponent = (head) => {
    return `
    
    <div class="city">${head.name}</div>
    <div><img class="head__image" src="${head.image}"/></div>
    <a class="head__link" href=${head.link}">Click for More Info</a>
    
    `
}