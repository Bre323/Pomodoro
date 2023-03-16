import React from "react";
import SetTimer from "./components/SetTimer";
import Clock from "./components/Clock";
const audio = document.getElementById('beep');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.loop = undefined;
    }

    state = {
        breakCount: 5,
        sessionCount: 25,
        clockCount: 25 * 60,
        currentTimer: "Session",
        isPlaying: false
    }


    handlePlayPause = () => {}
    handleReset = () => {}
    handleBreakDecrease = () => {}
    handleBreakIncrease = () => {}
    handleSessionDecrease = () => {}
    handleSessionIncrease = () => {}

    convertTime = (count) => {
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;
        
        minutes = minutes < 10 ? ("0" + minutes) : minutes;
        seconds = seconds < 10 ? ("0" + seconds) : seconds;

        return `${minutes}:${seconds}`
    }


    render() {
        const {
            breakCount,
            sessionCount,
            clockCount,
            currentTimer, 
            isPlaying
        } = this.state

        const breakProps = {
            title: "Break",
            count: breakCount,
            handleDecrease: this.handleBreakDecrease,
            handleIncrease: this.handleBreakIncrease
        }
        const sessionProps = {
            title: "Session",
            count: sessionCount,
            handleDecrease: this.handleSessionDecrease,
            handleIncrease: this.handleSessionIncrease
        }


        return (
            <div>
                <div className="timers">
                    <SetTimer {...breakProps} />
                    <SetTimer {...sessionProps} />
                </div>

                <Clock
                    currentTimer={currentTimer}
                    clockCount={clockCount}
                    isPlaying={isPlaying}
                    convertTime={this.convertTime}
                    handlePlayPause={this.handlePlayPause}
                    handleReset={this.handleReset}
                />
            </div>
        )
    }    
}


export default App