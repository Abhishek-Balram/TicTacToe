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


  //handleClick function which will be passed as a prop onto each square
  function handleClick(i){
    //only want to handle click if the ith square doesn't already have a value (i.e if its value is "")
    if(squares[i] == ""){
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