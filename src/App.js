//importing react stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';

function Square( { value, onSquareClick } ) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {

  //Implementing states: this defines 'squares' as a variable that stores a state and 'setSqaures' as a function that will be used to update the state. 
  const [squares, setSquares] = useState(Array(9).fill(""));

  const [xIsNext, setXIsNext] = useState(true);  

  //check for winner and set status variable
  let status;
  let winner = calculateWinner(squares); 
  if(winner == null){
    if(xIsNext){
      status = "X is next";
    } else {
      status = "O is next";
    }
  } else {
    status = "The winner is " + winner; 
  }

  //handleClick function which will be passed as a prop onto each square
  function handleClick(i){
    //only want to handle click if the ith square doesn't already have a value (i.e if its value is "") AND there isn't a winner already
    if(squares[i] == "" && calculateWinner(squares) == null){
      //use javascript syntax to make a copy of the 'squares' state variable
      const nextSquares = squares.slice();  

      //modify value of the ith square 
      if(nextSquares[i] == ""){
        if(xIsNext){
          nextSquares[i] = "X";
        } else {
          nextSquares[i] = "O"; 
        }
      }

      //update the state variables
      setSquares(nextSquares);     
      setXIsNext(!xIsNext);         
    }
   }


  //return JSX element containing 9 squares
  return( 
  <div>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </div>
  );
}

//function that contains the algorithm for calculating a winner - note that this is pure JS (no react)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}