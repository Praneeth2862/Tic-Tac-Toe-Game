let fun=()=>{
document.querySelector('#start-box').style.display='none';
document.querySelector('#game-box').style.display='flex';
let player1=document.querySelector('#player1').value;
let player2=document.querySelector('#player2').value;
if (player1==""){
    player1="Player 1(X)";
}
if (player2==""){
    player2="Player 2(O)";
}
document.querySelector('.display-player1').innerHTML=player1;
document.querySelector('.display-player2').innerHTML=player2;
let newGameButton = document.querySelector("#new-game-button");
newGameButton.addEventListener("click", () => {
   location.reload();
});

let currentPlayer='X';
let changePlayer=(cell)=>{
    currentPlayer= currentPlayer=='X'?'O':'X';
    if(currentPlayer=='X'){
        document.querySelector('.display-player1').classList.add('activeX');
        document.querySelector('.display-player2').classList.remove('activeO'); 
        cell.style.color='#80ffff';
    }
    if(currentPlayer=='O'){
        document.querySelector('.display-player2').classList.add('activeO');
        document.querySelector('.display-player1').classList.remove('activeX');
        cell.style.color='#ff3333';
    }
}
options=["","","","","","","","",""];
 winOptions=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [2,5,7]
];
let checkWinner=()=>{
    for(let i=0;i<winOptions.length;i++) {
        let winOption=winOptions[i];
        if(options[winOption[0]]==options[winOption[1]] && options[winOption[1]]==options[winOption[2]]){
            if(options[winOption[0]]!="") {
                return options[winOption[0]];
            };
        }
    };
}
let displayWinner=(value)=>{
    let winnername=document.querySelector('#winner-name');
    winnername.innerHTML=(value=="X")?player1:player2;
    document.querySelector('#game-box').style.display='none';
    document.querySelector('#display-winner').style.display='flex';
}
cells=document.querySelectorAll('.cell');
document.querySelector('.display-player1').classList.add('activeX');
cells.forEach(cell => {
    cell.addEventListener('click',()=>{
        if(!cell.textContent)
        {
            cell.innerHTML=currentPlayer;
            options[parseInt(cell.getAttribute('id'))]=currentPlayer;
            changePlayer(cell);
            let win=checkWinner();
            if(win=="X")
            {
                displayWinner("X");
            }
             if(win=="O"){
                displayWinner("Y");
            }
            
        }
    })
});

}

