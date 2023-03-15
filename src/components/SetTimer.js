import React from "react";
import "../styles/SetTimer.css";


const SetTimer = () => {
    return (
        <div className="timer-container">
            <h2>Timer Length</h2>

            <div className="buttons-wrapper">
                <button>
                    <i className="fas fa-minus" />
                </button>

                <span>00</span>

                <button>
                    <i className="fas fa-plus" />
                </button>
            </div>
        </div>
    )
}


export default SetTimer
