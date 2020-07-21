//converts one object into HTML

export const landmarkComponent = (landmark) => {
    return `
    <div class ="landmark">${landmark.name}</div>
    <section class="landmark__hover">
    <div><img class="landmark__image" src="${landmark.image}"></div>
    <div class="landmark__link"><a target=_blank href="${landmark.link}">Click to learn more about  ${landmark.name}</a></div>
    </section>
    <br></br>
    `
}