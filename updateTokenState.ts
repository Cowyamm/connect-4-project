import './App.css';
import {useEffect, useState} from "react";
import
interface SlotProps {
    column: number
    row: number
    color: string
}

export let tokenState: string[][] = [];

export function initTokenState() {
    for (let r = 0; r < 6; r++) {
        tokenState[r] = [];
        for (let c = 0; c <7; c++) {
            // Indicates that every slot is blue
            tokenState[r][c] = "B";
        }
    }
}
export function isWinner({row, column, color}: SlotProps)  {
    let rCount= 0;
    let yCount= 0;

    // Iterating through the columns and counting the number of each token
    if(color!=="Empty")
    {
        for (let r = 0; r < 6; r++) {
            if (tokenState[r][column] === "Red") {
                yCount = 0;
                rCount++;
                if (rCount === 4) {
                    return true;
                }

            } else if (tokenState[r][column] === "Yellow") {
                rCount = 0;
                yCount++;
                if (yCount === 4) {
                    return true;
                }
            } else {
                rCount = 0;
                yCount = 0;
            }
        }
        // Iterating through the rows and counting the number of each token
        rCount = 0;
        yCount = 0;
        for (let c = 0; c < 6; c++) {
            if (tokenState[row][c] === "Red") {
                yCount = 0;
                rCount++;
                if (rCount === 4) {
                    return true;
                }

            } else if (tokenState[row][c] === "Yellow") {
                rCount = 0;
                yCount++;
                if (yCount === 4) {
                    return true;
                }
            } else {
                rCount = 0;
                yCount = 0;
            }
        }
        let count = 1;
        let position = 1;
        // && tokenState[row-position][position+column]===color
        // IF WE COUNT4 IN A ROW, IF WE JIT THE END TOF THE MATRIX, IF WE HIT THE WRONG COLOR
        while ((row - position >= 0 && column + position < 7 && tokenState[row - position][column + position] === color)) {
            count++;
            position++;
            console.log("stuff is kinda happening");

            if (count === 3) {
                console.log("stuff is happening!!!");
                return true;
            }
        }

        while ((row + position < 6 && column - position >= 0 && tokenState[row + position][column - position] === color )) {
            count++;
            position++;
            console.log("stuff is kinda happening");

            if (count === 3) {
                console.log("stuff is happening!!!");
                return true;
            }
        }
        while ((row + position < 6 && column + position < 7 && tokenState[row + position][column + position] === color )) {
            count++;
            position++;
            console.log("stuff is kinda happening");

            if (count === 3) {
                console.log("stuff is happening!!!");
                return true;
            }
        }
        while ((row - position >= 0 && column - position >= 0 && tokenState[row - position][column - position] === color )) {
            count++;
            position++;
            console.log("stuff is kinda happening");

            if (count === 3) {
                console.log("stuff is happening!!!");
                return true;
            }
        }
    }
    // This wll check the diagnols to see if there is 4 in a row
    // let
    return false;


}
export const [winner, setWinner]= useState("");
// Goal make the token state array change when corresponding button is clicked
export function updateTokenState({row, column, color}: SlotProps) {
        tokenState[row][column] = color;
        console.log(tokenState);
        console.log(isWinner({row,column, color}));

        if(isWinner({row, column,color})){

            setWinner(  color+ " player has won!");
        }

}