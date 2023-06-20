import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Slot from './EmptySlot';
import {initTokenState, isWinner, updateTokenState} from "./updateTokenState";
import {winner} from "./updateTokenState";

// TokenState=> Variable that holds the token color
// Use a more useful name for the function that will be used for updating the
// state** updateTokenState

export function Game() {
    const [winner, setWinner]  = useState('none')
    initTokenState()


    // Work on hard coding individual integer props that store column and row
    return (
        <div className="Board">
            <div className="row">
                <Slot row={0} column={0}/>
                <Slot row={0} column={1}/>
                <Slot row={0} column={2}/>
                <Slot row={0} column={3}/>
                <Slot row={0} column={4}/>
                <Slot row={0} column={5}/>
                <Slot row={0} column={6}/>

            </div>
            <div className="row">
                <Slot row={1} column={0}/>
                <Slot row={1} column={1}/>
                <Slot row={1} column={2}/>
                <Slot row={1} column={3}/>
                <Slot row={1} column={4}/>
                <Slot row={1} column={5}/>
                <Slot row={1} column={6}/>


            </div>
            <div className="row">
                <Slot row={2} column={0}/>
                <Slot row={2} column={1}/>
                <Slot row={2} column={2}/>
                <Slot row={2} column={3}/>
                <Slot row={2} column={4}/>
                <Slot row={2} column={5}/>
                <Slot row={2} column={6}/>


            </div>
            <div className="row">
                <Slot row={3} column={0}/>
                <Slot row={3} column={1}/>
                <Slot row={3} column={2}/>
                <Slot row={3} column={3}/>
                <Slot row={3} column={4}/>
                <Slot row={3} column={5}/>
                <Slot row={3} column={6}/>


            </div>
            <div className="row">
                <Slot row={4} column={0}/>
                <Slot row={4} column={1}/>
                <Slot row={4} column={2}/>
                <Slot row={4} column={3}/>
                <Slot row={4} column={4}/>
                <Slot row={4} column={5}/>
                <Slot row={4} column={6}/>


            </div>
            <div className="row">
                <Slot row={5} column={0}/>
                <Slot row={5} column={1}/>
                <Slot row={5} column={2}/>
                <Slot row={5} column={3}/>
                <Slot row={5} column={4}/>
                <Slot row={5} column={5}/>
                <Slot row={5} column={6}/>

            </div>
            <div className="words">
                <h1>{"Connect Four"}</h1>
                {  winner
                }
            </div>
        </div>

    );

}

export default Game;
