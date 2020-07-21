//function to turn one object into HTML

export const LandmarkAsHTML = (landmarkObj) => {

    return `
    <div class ="landmark">${landmarkObj.name}</div>
    <section class="landmark__hover">
    <div><img class="landmark__image" src="${landmarkObj.image}"></div>
    <div class="landmark__link"><a target=_blank href="${landmarkObj.link}">Click to learn more about  ${landmarkObj.name}</a></div>
    </section>
    <br></br>
    `
}