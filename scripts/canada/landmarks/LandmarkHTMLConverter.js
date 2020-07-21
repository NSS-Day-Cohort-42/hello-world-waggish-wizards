export const LandmarkComponent = (landmark) => {
    return `
        
           <div class="landmark">${landmark.landmark}</div>
           <div><img class="city__image" src="${landmark.image}" /></div>
           <a class= "city__link" target=_blank href="${landmark.link}">Click Here For More Info </a> 
           <br> </br>
    `
}