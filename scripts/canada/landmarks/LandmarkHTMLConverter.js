export const LandmarkComponent = (landmark) => {
    return `
    <div class ="landmark">${landmark.landmark}</div>
    <section class="landmark__hover">
    <div><img class="landmark__image" src="${landmark.image}"></div>
    <div class="landmark__link"><a target=_blank href="${landmark.link}">Click to learn more about  ${landmark.landmark}</a></div>
    </section>
    <br></br>
    `
}