import React from "react";
import SetTimer from "./components/SetTimer";
import Clock from "./components/Clock";


const App = () => {
    const [breakCount, setBreakCount] = React.useState(5);
    const [sessionCount, setSessionCount] = React.useState(25);
    const [clockCount, setClockCount] = React.useState(25 * 60);
    const [currentTimer, setCurrentTimer] = React.useState("Session");
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [loop, setLoop] = React.useState(undefined);


    const handlePlayPause = () => {}
    const handleReset = () => {}
    const handleBreakDecrease = () => {}
    const handleBreakIncrease = () => {}
    const handleSessionDecrease = () => {}
    const handleSessionIncrease = () => {}
    const convertTime = (count) => {}


    const breakProps = {
        title: "Break",
        count: breakCount,
        handleDecrease: handleBreakDecrease,
        handleIncrease: handleBreakIncrease
    }
    const sessionProps = {
        title: "Session",
        count: sessionCount,
        handleDecrease: handleSessionDecrease,
        handleIncrease: handleSessionIncrease
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
                convertTime={convertTime}
                handlePlayPause={handlePlayPause}
                handleReset={handleReset}
            />
        </div>
    )
}


export default App
