import React from "react";
import "../styles/Clock.css";

const Clock = () => {
    return (
        <div className="clock-container">
            <h1 id="timer-label">Clock</h1>
            <span id="time-left">00:00</span>

            <div className="clock-buttons">
                <button id="start_stop">
                    <i className="fa fa-play" />
                </button>

                <button id="reset">
                    <i className="fa fa-stop" />
                </button>
            </div>
        </div>
    )
}


export default Clock
