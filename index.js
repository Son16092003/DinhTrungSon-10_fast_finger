let arr=["hello","hi","world","shy","food","for","it","on","one","two","there","four","five","six","seven","eight","nine","ten"];
let word=document.getElementById("content-random")
const button=document.getElementById("btn-play")
let input=document.getElementById("input")
let score=document.getElementById("result")
let countdowns=document.getElementById("countdown")

function random(){
    let itemrandom=Math.floor(Math.random()*arr.length);
    return intemrandom
}

let number=0;
let time=0;

function checkWord(){
    if(input.value==word.innerHTML){
        word.innerHTML=arr[random()]
        number++;
        score.innerHTML=number;
        input.value=""
    }
    else{
        word.innerHTML=arr[random()]
        input.value=""
    }
}
    input.addEventListener("keyup",({key}) => {
    if(key==="Enter"){
        checkWord()
    }
})