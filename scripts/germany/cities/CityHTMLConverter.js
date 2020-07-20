//converts one object into HTML

export const cityAsHTML = (cityObj) => {
    return `
    
    <div class="landmark">${cityObj.name}</div>
    `
}