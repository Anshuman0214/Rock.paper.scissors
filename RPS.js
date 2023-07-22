var userscore = 0;
var compscore = 0;
const userscore_span = document.getElementById("uscore");
const compscore_span = document.getElementById("cscore");
const sboard = document.querySelector(".score");
const presult = document.querySelector("h2");
const rock_div= document.getElementById("r");
const ppr_div= document.getElementById("p");
const sci_div= document.getElementById("s");

function getcomputerchoice(){
    const choices =['r','p','s'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function word(letter){
 if(letter === "r") return "Rock";
 if(letter === "p") return "Paper";
 return "Scissors";
}

function win(userchoice,computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    presult.innerHTML = `${word(userchoice)} beats ${word(computerchoice)}. You Win!!`;
  
}

function lose(userchoice, computerchoice){
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    presult.innerHTML = `${word(computerchoice)} beats ${word(userchoice)}. You lost!!`;

}

function draw(userchoice , computerchoice){
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    presult.innerHTML = `${word(userchoice)} equals ${word(computerchoice)}. It's a drawww!!`;

}

function game(userchoice){
    const computerchoice = getcomputerchoice();
    switch(userchoice + computerchoice){
    case "rs":
    case "pr":
    case "sp":
        win(userchoice,computerchoice);
    break;
    case "rp":
    case "ps":
    case "sr":
        lose (userchoice, computerchoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userchoice, computerchoice);
        break;
        }
}

function main (){
rock_div.addEventListener('click',function(){
    game('r')
})

ppr_div.addEventListener('click',function(){
    game('p')
})

sci_div.addEventListener('click',function(){
    game('s')
})
}


main();
