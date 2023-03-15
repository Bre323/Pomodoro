import React from "react";
import SetTimer from "./components/SetTimer";


const App = () => {
    const [breakCount, setBreakCount] = React.useState(5);
    const [sessionCount, setSessionCount] = React.useState(25);


    const handleBreakDecrease = () => {}
    const handleBreakIncrease = () => {}
    const handleSessionDecrease = () => {}
    const handleSessionIncrease = () => {}


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
        </div>
    )
}

export default App
