import { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  // Start Timer
  const startTimer = () => {
    if (isRunning) return;

    const total =
      Number(hours) * 3600 +
      Number(minutes) * 60 +
      Number(seconds);

    if (total <= 0) return;

    setTotalSeconds(total);
    setIsRunning(true);
  };

  // Pause Timer
  const pauseTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset Timer
  const resetTimer = () => {
    setIsRunning(false);

    clearInterval(timerRef.current);

    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
  };

  // Interval Logic
  useEffect(() => {
    if (!isRunning) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Convert total seconds to hh:mm:ss
  const displayHours = Math.floor(totalSeconds / 3600);

  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);

  const displaySeconds = totalSeconds % 60;

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div>
      <h2>Countdown Timer</h2>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          disabled={isRunning}
        />

        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          disabled={isRunning}
        />

        <input
          type="number"
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          disabled={isRunning}
        />
      </div>

      <h1>
        {formatTime(displayHours)}:
        {formatTime(displayMinutes)}:
        {formatTime(displaySeconds)}
      </h1>

      <div style={{ marginTop: "16px" }}>
        <button onClick={startTimer}>
          Start
        </button>

        <button onClick={pauseTimer}>
          {isRunning ? 'Pause' : 'Resume'}
        </button>

        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;