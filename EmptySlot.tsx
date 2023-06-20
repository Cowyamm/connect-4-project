import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {updateTokenState} from "./updateTokenState";
import {tokenState} from "./updateTokenState";

// import PropTypes from 'prop-types'; // ES6
// var PropTypes = require('prop-types'); // ES5 with npm

interface SlotProps {
    column: number
    row: number
}

let count = 0;
export default function Slot({row, column}: SlotProps) {
    const [color, setColor] = useState('Empty');

    let newColor: string = "Empty"

    useEffect(() => {
        console.log("Updating from HOOK")
        updateTokenState({row, column, color: color})
    }, [color]);

    function handleClick() {
        console.log(count)
        // This just makes sure that if
        // we click the same token
        // twice it doesn't update

        // Checks the conditions that must be true before the
        // click is handled
        // Checks that the row under is empty , if it is, do nothing
        // ALso if the row is not the bottom row do nothing

        // you cna click when the token directly below is NOT
        // empty OR the token is being placed in the bottom most row

        // When we're in the last row or the row below is occupied place a token
        if ((row === 5 || tokenState[row + 1][column] !== "Empty") && tokenState[row][column] === "Empty") {
            if (count % 2 === 0) {
                setColor(('Red'))
                newColor = "Red"
                count++;
            } else {
                newColor = "Yellow"
                setColor('Yellow');
                count++;
            }
        }
        // Makes sure that the token we are trying to play on is empty
        // if(tokenState[row][column]!== "Empty"){
        //
        // }
        // On an even or odd click we place red and yellow tokens

        console.log("Updating state from Handle CLick")

    }

    /*   We are going to try importing a new JSX library - proptypes library
      then i am going to try to pass the prop (whose type is number) as an id
  */

    return (
        <div>
            <button className={color} onClick={handleClick}></button>
        </div>
    )

// id= , id= ,
}

