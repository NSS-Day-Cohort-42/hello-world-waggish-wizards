const heads = [
    {
        name: "Shinzo Abe",
        image: "./images/shinzo.jpeg",
        link: "https://japan.kantei.go.jp/96_abe/meibo/daijin/abe_e.html"

},   
    {

        name: "Yoshihiko Noda",
        image: "./images/yoshi.jpeg",
        link: "https://japan.kantei.go.jp/noda/meibo/daijin/noda_e.html"

},
    {

        name: "Naoto Kan",
        image: "./images/naoto.jpeg",
        link: "https://www.un.org/sg/en/management/bios/Kan.shtml"

},
    {

        name: "Yukio Hatoyama",
        image: "./images/yukio.jpeg",
        link: "https://www.britannica.com/biography/Hatoyama-Yukio"

},
    {

        name: "Naruto Uzumaki",
        image: "./images/naruto.jpeg",
        link: "https://naruto.fandom.com/wiki/Naruto_Uzumaki"
}
]

export const useHeads = () => {
    return heads.slice()
}