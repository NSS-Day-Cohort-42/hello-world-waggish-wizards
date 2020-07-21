const Cities = [

    {
        city: "Toronto",
      image: "./images/Toronto.jpg",
      link: "https://www.toronto.ca/"
    },

    {
        city: "Vancouver",
       image: "./images/Vancouver.jpg",
       link: "https://www.tourismvancouver.com/"
    },

    {
        city: "Calgary",
        image: "./images/calgary.jpg",
        link: "https://moving2canada.com/living-in-calgary/"
        
    },

    {
        city: "Quebec",
        image: "./images/Quebec.jpg",
        link: "https://wikitravel.org/en/Quebec"
    },

    { city: "Charlottetown",
      image: "./images/charlottetown.jpg" ,
      link: "https://www.tourismpei.com/charlottetown-pei"
}

]


export const allCities = () => {
    return Cities.slice()
}
