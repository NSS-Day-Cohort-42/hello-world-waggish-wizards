//function to turn single heads object into HTML

export const HeadsAsHTML = (headObj) => {
    return `
   
        <div class="head">${headObj.name}</div>
        <div><img class="head__image" src="${headObj.image}"/><div>
        <a class="head__link" target=_blank href="${headObj.link}">Click Here for more info</a>
        `
    
}