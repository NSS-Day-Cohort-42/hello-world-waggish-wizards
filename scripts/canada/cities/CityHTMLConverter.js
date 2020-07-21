export const cityComponent = (city) => {
    return `
    <div class="city">${city.city}</div>
    <div><img class="city__image" src="${city.image}" /></div>
           <a class= "city__link" target=_blank href="${city.link}">Click Here For More Info </a> 
           <br> </br>
           
    `
}