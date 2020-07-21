export const HeadComponent = (head) => {
    return `
        
           <div class="head">${head.head}</div>
           <div><img class="city__image" src="${head.image}" /></div>
           <a class= "city__link" target=_blank href="${head.link}">Click Here For More Info </a> 
           <br> </br>
           
    `
}