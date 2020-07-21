export const landmarksHTML = (landmarkObj) => {
    return `
    <div class ="landmark">${landmarkObj.name}</div>
    <section class="landmark__hover">
    <div><img class="landmark__image" src="${landmarkObj.image}"></div>
    <div class="landmark__link"><a target=_blank href="${landmarkObj.URL}">Click to learn more about visiting the ${landmarkObj.name}</a></div>
    </section>
    <br></br>
`
}
