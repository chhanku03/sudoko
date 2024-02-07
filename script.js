const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winingPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//let create the function for intialize the game
function initGame()
{
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
     boxes.forEach((box,index)=>
     {
        box.innerText="";
        boxes[index].style.pointerEvents="all";
     })
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`current player - ${currentPlayer}`;

}
initGame();


    function swapTurn()
    {
        if(currentPlayer==="X")
        {
            currentPlayer="O";
        }
        else{
            currentPlayer="X";

           
        }
        gameInfo.innerText=`current player - ${currentPlayer}`;
    }

  function handleClick(index)
  {
    if(gameGrid[index]==="")
    {
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer;
         boxes[index].style.pointerEvents="none";

        //turn ko  swap krenge
        swapTurn();
        //check karenge kon game jita
        checkGameOver();

    }
  }

boxes.forEach((box,index)=>
{
    box.addEventListener("click",()=>
    {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click",initGame);