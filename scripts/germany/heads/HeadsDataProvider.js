//array of heads
const heads = [
    {name: "Frank- Walter Steinmeier"},
    {name: "Joachim Gauck"},
    {name: "Horst Seehofer"},
    {name: "Christian Wulff"},
    {name: "Jens Böhrnsen"}
]

export const useHeads = () => {
    return heads.slice()
}