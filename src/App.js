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
        clockCount: 5 * 60,
        currentTimer: "Break",
        isPlaying: false
    }


    componentWillUnmount() {
        clearInterval(this.loop);
    }


    handlePlayPause = () => {
        const { isPlaying } = this.state;

        if(isPlaying) {
            clearInterval(this.loop);

            this.setState({
                isPlaying: false
            })
        }

        else {
            this.setState({
                isPlaying: true
            })

            this.loop = setInterval(() => {
                const { 
                    clockCount,
                    currentTimer, 
                    breakCount, 
                    sessionCount 
                } = this.state;

                if(clockCount === 0) {
                    this.setState({
                        currentTimer: (currentTimer === "Session") ? "Break" : "Session",
                        clockCount: (currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60)
                    })
                    audio.play();
                }
                else {
                    this.setState({
                        clockCount: clockCount - 1
                    })
                }
            }, 1000);
        }
    }

    handleReset = () => {
        this.setState({
            breakCount: 5,
            sessionCount: 25,
            clockCount: 25 * 60,
            currentTimer: "Session",
            isPlaying: false
        })
        clearInterval(this.loop);

        audio.pause();
        audio.currentTime = 0;
    }

    handleBreakDecrease = () => {
        const {
            breakCount,
            isPlaying,
            currentTimer
        } = this.state;

        if(breakCount > 1) {
            if(!isPlaying && currentTimer === "Break") {
                this.setState({
                    breakCount: breakCount - 1,
                    clockCount: (breakCount - 1) * 60
                })
            }
            else {
                this.setState({
                    breakCount: breakCount - 1
                })
            }
        }
    }

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