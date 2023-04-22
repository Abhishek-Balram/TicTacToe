//importing react stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';

function Square() {
  //Implementing states: this defines 'value' as a variable that stores a state and 'setValue' as a function that will be used to update the state. 
  const [value, setValue] = useState(null);    

  //Function for handling clicks 
  function handleClick(){
    setValue("X")  
  }

  //return JSX element
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return( 
  <div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </div>
  );
}