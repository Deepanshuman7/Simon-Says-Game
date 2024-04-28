let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function() {
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    };
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 250)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 250)
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;

    //random choosing number
    let randomindex = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}

function checkans (index){
    if(userseq[index] === gameseq[index]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        resetgame();
    }
}

function btnpress() {
   // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function resetgame(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}