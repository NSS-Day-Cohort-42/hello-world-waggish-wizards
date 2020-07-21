//converts one object into HTML

export const landmarkComponent = (landmark) => {
    return `
    
    <div class="city">${landmark.name}</div>
    <div><img class="landmark__image" src="${landmark.image}"/></div>
    <a class="landmark__link" href="${landmark.link}">Click For More Info</a>
    
    `
}