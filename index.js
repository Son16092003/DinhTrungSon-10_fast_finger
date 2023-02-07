// ham random
// dom de xac dinh thanh phan can de bat event 
// bat event
// kiem tra 
// them, xoa, sua bang object.innerText
// setinterval 
// clearInterval


// randome tu
let arr=["hello","hi","world","shy","food","for","it","on","one","two","there","four","five","six","seven","eight","nine","ten"];
// de random tu thi random index
// (0 - 1) => (0 length of array)
let indexRandom = Math.floor( Math.random() * arr.length);
let test = document.getElementById("randomWord");
// event 
let a = document.getElementById("input-text");
a.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        test.innerText = "hello world";
    }
});







let word=document.getElementById("content-random")
const button=document.getElementById("btn-play")
let input=document.getElementById("input")
let score=document.getElementById("result")
let countdowns=document.getElementById("countdown")
