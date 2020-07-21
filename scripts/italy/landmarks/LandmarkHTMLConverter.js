export const landmarksHTML = (landmarkObj) => {
    return `
    <div class ="landmark">${landmarkObj.name}</div>
        <div><img class="landmark__image" src="${landmarkObj.image}"></div>
        <a class= "landmark__link" target=_blank href="${landmarkObj.URL}">Click Here for more info</a>
        <br></br>
        `
}
