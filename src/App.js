import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isStarted) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isStarted, time]);

    const handleClick = () => {
        setIsStarted(!isStarted);
    };
    const handleReset = () => {
        setTime(0);
    };

    const formatTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const remainingSeconds = sec % 60;

        return `${minutes.toString().padStart(1, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div className="App">
            <h1>Stopwatch</h1>
            <p>
                Time: <span>{formatTime(time)}</span>
            </p>
            <div className="button-container">
                <button onClick={() => handleClick()}>
                    {isStarted ? "Stop" : "Start"}
                </button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
        </div>
    );
}

export default App;
