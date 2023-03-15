import React from "react";
import "../styles/SetTimer.css";


const SetTimer = ({ title, count, handleDecrease, handleIncrease }) => {
    const id = title.toLowerCase

    return (
        <div className="timer-container">
            <h2 id={`${id}-label`}>{title} Length</h2>

            <div className="buttons-wrapper">
                <button id={`${id}-decrement`} onClick={handleDecrease}>
                    <i className="fa fa-minus" />
                </button>

                <span id={`${id}-length`}>{count}</span>

                <button id={`${id}-increment`} onClick={handleIncrease}>
                    <i className="fa fa-plus" />
                </button>
            </div>
        </div>
    )
}


export default SetTimer
