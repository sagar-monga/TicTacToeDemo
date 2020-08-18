window.addEventListener('load', bindEvent);

var turn = 1;
function bindEvent(){
    document.querySelector('#B00').addEventListener('click', putXO);
    document.querySelector('#B01').addEventListener('click', putXO);
    document.querySelector('#B02').addEventListener('click', putXO);
    document.querySelector('#B10').addEventListener('click', putXO);
    document.querySelector('#B11').addEventListener('click', putXO);
    document.querySelector('#B12').addEventListener('click', putXO);
    document.querySelector('#B20').addEventListener('click', putXO);
    document.querySelector('#B21').addEventListener('click', putXO);
    document.querySelector('#B22').addEventListener('click', putXO);
}

function putXO(){
    var val;
    if(this.innerHTML == '!!!'){
        if(document.getElementById('result').innerText == ""){
            turn % 2 == 1 ? val = "X" : val = "O";
            this.innerHTML = val;
            turn++;
        }
        if(turn == 10 && document.getElementById('result').innerText == ""){
            document.getElementById('result').innerText = "Draw";
        }
        checkWinner();
    }
}

function winnerX(){
    if(document.getElementById('result').innerText != "Player 1 Wins" || document.getElementById('result').innerText != "Player 2 Wins"){
        if(document.getElementById('B00').innerText == "X" && document.getElementById('B01').innerText == "X" && document.getElementById('B02').innerText == "X" ||
        document.getElementById('B10').innerText == "X" && document.getElementById('B11').innerText == "X" && document.getElementById('B12').innerText == "X" ||
        document.getElementById('B20').innerText == "X" && document.getElementById('B21').innerText == "X" && document.getElementById('B22').innerText == "X" ||
        document.getElementById('B00').innerText == "X" && document.getElementById('B10').innerText == "X" && document.getElementById('B20').innerText == "X" ||
        document.getElementById('B01').innerText == "X" && document.getElementById('B11').innerText == "X" && document.getElementById('B21').innerText == "X" || 
        document.getElementById('B02').innerText == "X" && document.getElementById('B12').innerText == "X" && document.getElementById('B22').innerText == "X" ||
        document.getElementById('B00').innerText == "X" && document.getElementById('B11').innerText == "X" && document.getElementById('B22').innerText == "X" || 
        document.getElementById('B02').innerText == "X" && document.getElementById('B11').innerText == "X" && document.getElementById('B20').innerText == "X")
            document.getElementById('result').innerText = "Player 1 Wins";
    }
}

function winnerY(){
    if(document.getElementById('result').innerText != "Player 1 Wins" || document.getElementById('result').innerText != "Player 2 Wins"){
        if(document.getElementById('B00').innerText == "O" &&
        document.getElementById('B01').innerText == "O" &&
        document.getElementById('B02').innerText == "O" ||
        document.getElementById('B10').innerText == "O" &&
        document.getElementById('B11').innerText == "O" &&
        document.getElementById('B12').innerText == "O" ||
        document.getElementById('B20').innerText == "O" &&
        document.getElementById('B21').innerText == "O" &&
        document.getElementById('B22').innerText == "O" ||
        document.getElementById('B00').innerText == "O" &&
        document.getElementById('B10').innerText == "O" &&
        document.getElementById('B20').innerText == "O" ||
        document.getElementById('B01').innerText == "O" &&
        document.getElementById('B11').innerText == "O" && 
        document.getElementById('B21').innerText == "O" || 
        document.getElementById('B02').innerText == "O" && 
        document.getElementById('B12').innerText == "O" && 
        document.getElementById('B22').innerText == "O" ||
        document.getElementById('B00').innerText == "O" && 
        document.getElementById('B11').innerText == "O" && 
        document.getElementById('B22').innerText == "O" || 
        document.getElementById('B02').innerText == "O" && 
        document.getElementById('B11').innerText == "O" && 
        document.getElementById('B20').innerText == "O")
            document.getElementById('result').innerText = "Player 2 Wins";
    }
}

function checkWinner(){
    if(turn % 2 == 0)
        winnerX();
    else
        winnerY();
}