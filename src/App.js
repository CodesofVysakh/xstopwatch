import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isStarted) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1000);
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

    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes.toString().padStart(1, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <div className="App">
            <h1>Stopwatch</h1>
            <p>
                Time : <span>{formatTime(time)}</span>
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
