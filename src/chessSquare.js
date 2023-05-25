import css from "./style.css";
import { dijkstra } from "./graph";

var promptHeadline = document.querySelector(".prompt");
var restartBtn = document.querySelector(".restart-button");
var boardHTML = document.querySelector(".board");



function chessSquare(row, column, N){

    var elem = document.createElement("div");
    function setNormalColor(){
        if((row + column) % 2 == 0){
            elem.style.backgroundColor = '#eaebbe';
        }
        else{
            elem.style.backgroundColor = '#546c3a';
        }
    }

    function makeActive(number){
        elem.classList.add('active');
        elem.style.backgroundColor = 'grey';
        elem.textContent = number;
    }

    elem.style.width = elem.style.height = 600 / N - 2 + "px";
    elem.classList.add("square");

    return {element:elem, makeActive, setNormalColor}

}

function loadStartBoard(N){
    restartBtn.onclick = function(){
        loadStartBoard(N);
    }
    restartBtn.style.display = "none";
    boardHTML.innerHTML = "";
    promptHeadline.textContent = "Click your starting location";
    var board = new Array(N);
    for(let i = 0; i < N; i++){
        board[i] = []; 
    }
    var chessboard = document.querySelector('.board');


    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){ 
            board[i].push(new chessSquare(i,j, N));
            board[i][j].setNormalColor();
            chessboard.appendChild(board[i][j].element);
            board[i][j].element.onclick = function(){
                board[i][j].makeActive(0);
                loadEndBoard(N, [i,j], board);
            }
        }
    }
}

function loadEndBoard(N, startNode, board){
    promptHeadline.textContent= "Click your ending location";
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(startNode != [i,j]){
                board[i][j].element.onclick = function(){
                    board[i][j].makeActive('X');
                    let path = dijkstra(startNode, [i,j], N);
                    for(let k = 0; k < path.length; k++){
                        board[path[k][0]][path[k][1]].makeActive(k);
                    }
                    endProgram(board,N);
                }
            }
        }
    }
}

function endProgram(board, N){
    restartBtn.style.display = "block";
    promptHeadline.textContent = "This is the shortest path!";
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){ 
            board[i][j].element.onclick = function(){
            }
        }
    }
}

export{chessSquare, loadStartBoard}