import Settings from "/src/assets/icon-settings.svg";
import Close from "/src/assets/icon-close.svg";
import clsx from "clsx";
import ChangeFont from "../change-font";
import ChangeColor from "../change-color";
import { Dispatch, SetStateAction, useState } from "react";
import ChangeTime from "../change-time";

function Menu(props: {
  openSettings: boolean;
  setOpenSettings: (status: boolean) => void;
  font: string;
  setFont: (status: string) => void;
  color: string;
  setColor: (status: string) => void;
  pomodoro: number;
  setPomodoro: Dispatch<SetStateAction<number>>;
  shortBrake: number;
  setShortBrake: Dispatch<SetStateAction<number>>;
  longBrake: number;
  setLongBrake: Dispatch<SetStateAction<number>>;
  apply: boolean;
  setApply: (status: boolean) => void;
}) {
  const [tempPomodoro, setTempPomodoro] = useState(props.pomodoro);
  const [tempShortBrake, setTempShortBrake] = useState(props.shortBrake);
  const [tempLongBrake, setTempLongBrake] = useState(props.longBrake);
  const [tempFont, setTempFont] = useState(props.font);
  const [tempColor, setTempColor] = useState(props.color);

  const handleApply = () => {
    props.setPomodoro(tempPomodoro);
    props.setShortBrake(tempShortBrake);
    props.setLongBrake(tempLongBrake);
    props.setFont(tempFont);
    props.setColor(tempColor);
    props.setApply(true);
    props.setOpenSettings(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          props.setOpenSettings(true);
        }}
      >
        <img src={Settings} alt="Settings" />
      </button>
      {props.openSettings && (
        <div className="flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-[#0000006e] z-20">
          <div className="md:max-w-[34rem] bg-[#FFF] max-w-[21rem] w-full rounded-3xl pb-[1.5rem] relative">
            <div className="flex justify-between items-center p-[1.5rem]">
              <h1
                className={clsx(
                  tempFont === "sans" && "font-sans",
                  tempFont === "serif" && "font-serif",
                  tempFont === "mono" && "font-mono",
                  "md:text-[1.8rem] md:leading-[2rem] text-[1.25rem] leading-[1.5rem] font-[700] text-commonColor"
                )}
              >
                Settings
              </h1>
              <button>
                <img
                  onClick={() => {
                    props.setOpenSettings(false);
                  }}
                  src={Close}
                  alt="Close"
                />
              </button>
            </div>
            <span className="flex bg-[#E3E1E1] h-[0.1rem] w-full"></span>
            <ChangeTime
              font={tempFont}
              pomodoro={tempPomodoro}
              setPomodoro={setTempPomodoro}
              shortBrake={tempShortBrake}
              setShortBrake={setTempShortBrake}
              longBrake={tempLongBrake}
              setLongBrake={setTempLongBrake}
            />
            <div className="md:px-[2.5rem] px-[1.5rem]">
              <span className="flex bg-[#E3E1E1] h-[0.1rem] w-full"></span>
              <ChangeFont font={tempFont} setFont={setTempFont} />
              <span className="flex bg-[#E3E1E1] h-[0.1rem] w-full"></span>
              <ChangeColor
                color={tempColor}
                setColor={setTempColor}
                font={tempFont}
              />
            </div>
            <div className="flex justify-center w-full px-[1.5rem]">
              <button
                onClick={handleApply}
                className={clsx(
                  tempFont === "sans" && "font-sans",
                  tempFont === "serif" && "font-serif",
                  tempFont === "mono" && "font-mono",
                  tempColor === "red" && "bg-[#F87070]",
                  tempColor === "lightblue" && "bg-[#70F3F8]",
                  tempColor === "purple" && "bg-[#D881F8]",
                  "text-[1rem] leading-[1.3rem] font-[700] text-[#FFF] max-w-[9rem] w-full py-[1.2rem] absolute rounded-full"
                )}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Menu;
