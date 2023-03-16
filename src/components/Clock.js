import React from "react";
import "../styles/Clock.css";

const Clock = ({ currentTimer, convertTime, clockCount, isPlaying, handlePlayPause, handleReset }) => {
    return (
        <div className="clock-container">
            <h1 id="timer-label">{currentTimer}</h1>
            <span id="time-left">{convertTime(clockCount)}</span>

            <div className="clock-buttons">
                <button id="start_stop" onClick={handlePlayPause}>
                    <i className={`fa fa-${isPlaying ? `pause` : `play`}`} />
                </button>

                <button id="reset" onClick={handleReset}>
                    <i className="fa fa-stop" />
                </button>
            </div>
        </div>
    )
}


export default Clock
