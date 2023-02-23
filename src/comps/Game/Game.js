import React, { useState } from "react";
import Header from "../Header/Header";
import Box from "../Box/Box";
import "../Header/Header.css"

const board = [[], [], []];

function Game() {
  const [turn, setTurn] = useState("x");
  const [winningText,setWinningText] =useState("");

  function changeTurn(row, col) {
    board[row][col] = turn;
    
    
   
   const winner = checkFowWin();
   
   if (winner===undefined){
    setTurn((turn) => (turn === "x" ? "o" : "x"));
   }
   else{
    setTurn("")
   }
   if(!winner){
    
   }else{
    setWinningText(winner +  " won!")
   }
  }

  function checkFowWin() {
   
    for (let i = 0; i < board.length; i++) {
      const col = board[i];
      if (col[0] === col[1] && col[1] === col[2] && col[0]) {
        //win
        
        return col[0];
      }
    }
    
    for (let i = 0; i < board.length; i++) {
      const row1 = board[0][i];
      const row2 = board[1][i];
      const row3 = board[2][i];
      if (row1 == row2 && row2 == row3 && row1) {
        return row1;
      }
    }
     

    const d1 = board[0][0]
    const d2 = board[1][1]
    const d3 = board[2][2]

    if(d1=== d2 && d2 ==d3 && d1){
        return d1
    }

    const p1 =board[0][2]
    const p2 = board[1][1]
    const p3 = board[2][0]

    if(p1===p2 && p2===p3 && p1){
        return p1
    }
   
  }
  const resetGame = () => {
     
    window.location.reload()
}

  return (
    
  <>
    
    <Header win={winningText} />
    
      <div className="row">
        <Box row={0} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} col={2} currentState={turn} changeTurn={changeTurn} />
      

      
        <Box row={1} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} col={2} currentState={turn} changeTurn={changeTurn} />
      

      
        <Box row={2} col={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} col={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      

      <button className="restart-btn" onClick={resetGame}>RESTART</button>
    </>
  );
}

export default Game;