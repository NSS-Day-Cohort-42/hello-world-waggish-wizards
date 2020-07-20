//function to turn one object into HTML

export const LandmarkAsHTML = (landmarkObj) => {

    return `
    
    <div class="landmark">${landmarkObj.name}</div>
    <div><img class="landmark__image" src="${landmarkObj.image}"/><div>
    <a class="landmark__link" target=_blank href="${landmarkObj.link}">Click Here for more info</a>
    
    `
}