let he=document.getElementById("home-score");
let ge=document.getElementById("guest-score");

let homescore=0;
let guestscore=0;

function add1p(team){
    if(team=='home'){
        homescore+=1;
        he.textContent=homescore;
    }
    else{
        guestscore+=1
        ge.textContent=guestscore
    }
    
}
function add2p(team){
    if(team=='home'){
        homescore+=2;
        he.textContent=homescore;
    }
    else{
        guestscore+=2;
        ge.textContent=guestscore
    }
}
function add3p(team){
    if(team=='home'){
        homescore+=3
        he.textContent=homescore;
    }
    else{
        guestscore+=3;
        ge.textContent=guestscore;
    }
}