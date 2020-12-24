const backgroundColors = ["#edb62e", "#5288be", "#e4b4b4"];

//Select backpack images
const yellowPack = document.getElementById("yellowpack");
const bluePack = document.getElementById("bluepack");
const redPack = document.getElementById("redpack");

//Selecting Dots and adding click listener
const yellowdot = document.getElementById("yellowdot");
yellowdot.addEventListener("click", yellowClick);

const bluedot = document.getElementById("bluedot");
bluedot.addEventListener("click", blueClick);

const reddot = document.getElementById("reddot");
reddot.addEventListener("click", redClick);


//Functions to change 
function yellowClick(){
    document.body.style.background = backgroundColors[0];
    yellowPack.classList.add("active");
    bluePack.classList.remove("active");
    redPack.classList.remove("active");
}

function blueClick(){
    document.body.style.background = backgroundColors[1];
    yellowPack.classList.remove("active");
    bluePack.classList.add("active");
    redPack.classList.remove("active");
}

function redClick(){
    document.body.style.background = backgroundColors[2];
    yellowPack.classList.remove("active");
    bluePack.classList.remove("active");
    redPack.classList.add("active");
}

document.body.style.background = backgroundColors[0];

