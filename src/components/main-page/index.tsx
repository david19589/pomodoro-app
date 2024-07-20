import Logo from "/src/assets/logo.svg";
import CountDownTimer from "../countdown-timer";
import Menu from "../menu";
import { useState } from "react";
import clsx from "clsx";

function MainPage(props: {
  openSettings: boolean;
  setOpenSettings: (status: boolean) => void;
}) {
  const [font, setFont] = useState("sans");
  const [color, setColor] = useState("red");
  const [option, setOption] = useState("pomodoro");
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBrake, setShortBrake] = useState(5);
  const [longBrake, setLongBrake] = useState(15);

  return (
    <div className="pt-[2rem] pb-[3rem] flex flex-col items-center">
      <img className="mb-[2.8rem]" src={Logo} alt="Logo" />
      <div className="flex justify-between bg-[#161932] mb-[3rem] rounded-full p-[0.5rem]">
        <button
          onClick={() => {
            setOption("pomodoro");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "pomodoro" &&
                color === "red" &&
                "bg-[#F87070] text-[#1E213F]",
              option === "pomodoro" &&
                color === "lightblue" &&
                "bg-[#70F3F8] text-[#1E213F]",
              option === "pomodoro" &&
                color === "purple" &&
                "bg-[#D881F8] text-[#1E213F]",

              "text-[0.8rem] leading-[0.9rem] font-[700] text-[#D7E0FF] p-[1.2rem] rounded-full"
            )}
          >
            pomodoro
          </h2>
        </button>
        <button
          onClick={() => {
            setOption("shortBrake");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "shortBrake" &&
                color === "red" &&
                "bg-[#F87070] text-[#1E213F]",
              option === "shortBrake" &&
                color === "lightblue" &&
                "bg-[#70F3F8] text-[#1E213F]",
              option === "shortBrake" &&
                color === "purple" &&
                "bg-[#D881F8] text-[#1E213F]",
              "text-[0.8rem] leading-[0.9rem] font-[700] text-[#D7E0FF] p-[1.2rem] rounded-full"
            )}
          >
            short break
          </h2>
        </button>
        <button
          onClick={() => {
            setOption("longBrake");
          }}
        >
          <h2
            className={clsx(
              font === "sans" && "font-sans",
              font === "serif" && "font-serif",
              font === "mono" && "font-mono",
              option === "longBrake" &&
                color === "red" &&
                "bg-[#F87070] text-[#1E213F]",
              option === "longBrake" &&
                color === "lightblue" &&
                "bg-[#70F3F8] text-[#1E213F]",
              option === "longBrake" &&
                color === "purple" &&
                "bg-[#D881F8] text-[#1E213F]",
              "text-[0.8rem] leading-[0.9rem] font-[700] text-[#D7E0FF] p-[1.2rem] rounded-full"
            )}
          >
            long break
          </h2>
        </button>
      </div>
      <CountDownTimer
        font={font}
        color={color}
        option={option}
        pomodoro={pomodoro}
        shortBrake={shortBrake}
        longBrake={longBrake}
      />
      <Menu
        openSettings={props.openSettings}
        setOpenSettings={props.setOpenSettings}
        font={font}
        setFont={setFont}
        color={color}
        setColor={setColor}
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        shortBrake={shortBrake}
        setShortBrake={setShortBrake}
        longBrake={longBrake}
        setLongBrake={setLongBrake}
      />
    </div>
  );
}

export default MainPage;
