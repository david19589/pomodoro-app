import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

function CountDownTimer(props: {
  font: string;
  color: string;
  option: string;
  pomodoro: number;
  shortBrake: number;
  longBrake: number;
}) {
  const { option, pomodoro, shortBrake, longBrake } = props;

  const getInitialTime = useCallback(
    (option: string) => {
      switch (option) {
        case "pomodoro":
          return pomodoro * 60;
        case "shortBrake":
          return shortBrake * 60;
        case "longBrake":
          return longBrake * 60;
        default:
          return 1500;
      }
    },
    [longBrake, pomodoro, shortBrake]
  );

  const [timeLeft, setTimeLeft] = useState(getInitialTime(option));
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    setTimeLeft(getInitialTime(option));
    setStartTimer(false);
  }, [getInitialTime, option]);

  useEffect(() => {
    let timer: number | undefined;

    if (startTimer) {
      if (timeLeft > 0) {
        timer = setTimeout(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      } else {
        clearTimeout(timer);
      }
      return () => {
        clearTimeout(timer);
      };
    }
    if (timeLeft === 0) {
      setTimeLeft(0);
      setStartTimer(false);
    }
  }, [startTimer, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const totalTime = getInitialTime(option);
  const percentage = (timeLeft / totalTime) * 100;

  return (
    <div className="rounded-full flex items-center justify-center p-[1.6rem] h-[18rem] w-[18rem] mb-[5rem] bg-gradient-to-tl from-[#2E325A] to-[#0E112A]">
      <div className="p-[0.5rem] bg-[#161932] rounded-full">
        <div className="relative flex flex-col items-center justify-center h-[15rem] w-[15rem]">
          <svg
            className="absolute h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              className={clsx(
                props.color === "red" && "stroke-[#F87070]",
                props.color === "lightblue" && "stroke-[#70F3F8]",
                props.color === "purple" && "stroke-[#D881F8]",
                "stroke-[0.2rem]"
              )}
              strokeLinecap="round"
              fill="transparent"
              r="46"
              cx="50"
              cy="50"
              strokeDasharray="290"
              strokeDashoffset={`calc(290 - (290 * ${percentage}) / 100)`}
              style={{
                transition: "stroke-dashoffset 1s linear",
              }}
            />
          </svg>
          <span
            className={clsx(
              props.font === "sans" && "font-sans",
              props.font === "serif" && "font-serif",
              props.font === "mono" && "font-mono",
              "text-[5rem] leading-[6rem] tracking-[-0.1rem] font-[700] font-sans text-[#D7E0FF] mb-[0.8rem] z-10"
            )}
          >
            {String(minutes).padStart(1, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
          <button
            onClick={() => {
              setStartTimer(!startTimer);
            }}
            className={clsx(
              props.font === "sans" && "font-sans",
              props.font === "serif" && "font-serif",
              props.font === "mono" && "font-mono",
              "text-[0.9rem] leading-[1.1rem] tracking-[0.8rem] font-[700] text-[#D7E0FF] outline-none z-10"
            )}
          >
            {timeLeft === 0 ? "RESET" : startTimer ? "PAUSE" : "START"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountDownTimer;
