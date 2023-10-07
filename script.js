const music = new Audio("music.mp3");
music.volume = 0.5;
music.play();
if(music.currentTime == music.duration){
    music.currentTime = 0;
    music.play();
}
const gameover = new Audio("gameover.mp3");
let audioTurn = new Audio("ting.mp3");
audioTurn.volume = 0.7;
let turn = 'X';
const turnInfo = document.querySelector(".info");
let over = false;


// Function to change the turn 
const changeTurn = ()=>{
    turn = (turn === 'X'?'O' : 'X');
    document.querySelector(".info").innerText = `Turn For ${turn} `;
}


// Function to check for win
const checkWin = ()=>{
    let boxes = document.querySelectorAll('.box');
    let boxtexts = document.querySelectorAll('.boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach((e) => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = `${boxtexts[e[0]].innerText} Win The Game`;
            boxes[e[0]].style.backgroundColor = boxes[e[1]].style.backgroundColor = boxes[e[2]].style.backgroundColor = 'green';
            boxes[e[0]].style.color = boxes[e[1]].style.color = boxes[e[2]].style.color = 'rgb(248, 239, 203)';
            over = true;
            document.querySelector('.imgbox').querySelector('img').style.width = '200px';
            audioTurn = new Audio('gameover.mp3');
            audioTurn.play();
        }
    })
}

// Game Logic 
// music.play();
let boxes = Array.from(document.querySelectorAll('.box'));
boxes.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        let boxtext = element.querySelector('.boxtext');
        if(boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            audioTurn.play();
            if(!over){
                changeTurn();
            }
            checkWin();
        }
    })
})

///Resate button 

document.querySelector('.resete').addEventListener('click',e=>{
    let boxes = document.querySelectorAll('.boxtext');
    boxes.forEach(element =>{
        element.innerText = "";

    })
    over = false;
    document.querySelector(".info").innerText = `Turn For X`;
    document.querySelector('.imgbox').querySelector('img').style.width = 0;
    audioTurn = new Audio('ting.mp3');
    document.querySelectorAll('.box').forEach(e => {
        e.style.backgroundColor = 'white';
        e.style.color = 'black';
    })
    })