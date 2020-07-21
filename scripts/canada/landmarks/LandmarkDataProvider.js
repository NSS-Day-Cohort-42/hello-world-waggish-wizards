const Landmarks = [
    
    {landmark: "Niagara Falls",
     image: "./images/Niagarafalls.jpg",
     link:" https://www.niagarafallsstatepark.com/"},


    {landmark: "Lake Louise",
     image:"./images/lakelouise.jpg",
     link: "https://www.banfflakelouise.com/"},

    {landmark: "Mount Robson",
     image: "./images/Mountrobson.jpg",
     link: "https://visitvalemount.ca/summer/mount-robson-provincial-park/"},

    {landmark: "Hopewell Rocks",
     image: "./images/Hopewellrocks.jpg",
     link: "https://www.thehopewellrocks.ca/index.php/en/home"},

    {landmark: "CN Tower",
     image: "./images/CNtower.jpg",
     link: "https://www.seetorontonow.com/listings/cn-tower/"}
  
]


export const allLandmarks = () => {
  return Landmarks.slice()   
}


