import Settings from "/src/assets/icon-settings.svg";
import Close from "/src/assets/icon-close.svg";
import ArrowUp from "/src/assets/icon-arrow-up.svg";
import ArrowDown from "/src/assets/icon-arrow-down.svg";
import clsx from "clsx";
import ChangeFont from "../change-font";
import ChangeColor from "../change-color";
import { Dispatch, SetStateAction } from "react";

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
}) {
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
          <div className="bg-[#FFF] max-w-[21rem] w-full rounded-xl">
            <div className="flex justify-between items-center p-[1.5rem]">
              <h1
                className={clsx(
                  props.font === "sans" && "font-sans",
                  props.font === "serif" && "font-serif",
                  props.font === "mono" && "font-mono",
                  "text-[1.25rem] leading-[1.5rem] font-[700] text-[#161932]"
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
            <div className="flex flex-col items-center p-[1.5rem]">
              <h2
                className={clsx(
                  props.font === "sans" && "font-sans",
                  props.font === "serif" && "font-serif",
                  props.font === "mono" && "font-mono",
                  "text-[0.7rem] leading-[0.9rem] tracking-[0.3rem] font-[700] text-[#161932] mb-[1.15rem]"
                )}
              >
                TIME (MINUTES)
              </h2>
              <div className="w-full">
                <div className="flex items-center justify-between mb-[0.5rem]">
                  <h3
                    className={clsx(
                      props.font === "sans" && "font-sans",
                      props.font === "serif" && "font-serif",
                      props.font === "mono" && "font-mono",
                      "text-[0.75rem] leading-[0.9rem] font-[700] text-[#1E213F] opacity-[40%]"
                    )}
                  >
                    pomodoro
                  </h3>
                  <div className="flex items-center justify-between p-[1rem] bg-[#EFF1FA] rounded-lg max-w-[9rem] w-full">
                    <span
                      className={clsx(
                        props.font === "sans" && "font-sans",
                        props.font === "serif" && "font-serif",
                        props.font === "mono" && "font-mono",
                        "text-[0.9rem] leading-[1rem] font-[700] text-[#1E213F]"
                      )}
                    >
                      {props.pomodoro}
                    </span>
                    <div className="flex flex-col gap-[0.5rem]">
                      <button>
                        <img
                          onClick={() => {
                            props.setPomodoro((prev) => Math.min(prev + 1, 60));
                          }}
                          src={ArrowUp}
                          alt="ArrowUp"
                        />
                      </button>
                      <button>
                        <img
                          onClick={() => {
                            props.setPomodoro((prev) => Math.max(prev - 1, 1));
                          }}
                          src={ArrowDown}
                          alt="ArrowDown"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[0.5rem]">
                  <h3
                    className={clsx(
                      props.font === "sans" && "font-sans",
                      props.font === "serif" && "font-serif",
                      props.font === "mono" && "font-mono",
                      "text-[0.75rem] leading-[0.9rem] font-[700] text-[#1E213F] opacity-[40%]"
                    )}
                  >
                    short break
                  </h3>
                  <div className="flex items-center justify-between p-[1rem] bg-[#EFF1FA] rounded-lg max-w-[9rem] w-full">
                    <span
                      className={clsx(
                        props.font === "sans" && "font-sans",
                        props.font === "serif" && "font-serif",
                        props.font === "mono" && "font-mono",
                        "text-[0.9rem] leading-[1rem] font-[700] text-[#1E213F]"
                      )}
                    >
                      {props.shortBrake}
                    </span>
                    <div className="flex flex-col gap-[0.5rem]">
                      <button>
                        <img
                          onClick={() => {
                            props.setShortBrake((prev) =>
                              Math.min(prev + 1, 60)
                            );
                          }}
                          src={ArrowUp}
                          alt="ArrowUp"
                        />
                      </button>
                      <button>
                        <img
                          onClick={() => {
                            props.setShortBrake((prev) =>
                              Math.max(prev - 1, 1)
                            );
                          }}
                          src={ArrowDown}
                          alt="ArrowDown"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3
                    className={clsx(
                      props.font === "sans" && "font-sans",
                      props.font === "serif" && "font-serif",
                      props.font === "mono" && "font-mono",
                      "text-[0.75rem] leading-[0.9rem] font-[700] text-[#1E213F] opacity-[40%]"
                    )}
                  >
                    long break
                  </h3>
                  <div className="flex items-center justify-between p-[1rem] bg-[#EFF1FA] rounded-lg max-w-[9rem] w-full">
                    <span
                      className={clsx(
                        props.font === "sans" && "font-sans",
                        props.font === "serif" && "font-serif",
                        props.font === "mono" && "font-mono",
                        "text-[0.9rem] leading-[1rem] font-[700] text-[#1E213F]"
                      )}
                    >
                      {props.longBrake}
                    </span>
                    <div className="flex flex-col gap-[0.5rem]">
                      <button>
                        <img
                          onClick={() => {
                            props.setLongBrake((prev) =>
                              Math.min(prev + 1, 60)
                            );
                          }}
                          src={ArrowUp}
                          alt="ArrowUp"
                        />
                      </button>
                      <button>
                        <img
                          onClick={() => {
                            props.setLongBrake((prev) => Math.max(prev - 1, 1));
                          }}
                          src={ArrowDown}
                          alt="ArrowDown"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="flex bg-[#E3E1E1] h-[0.1rem] w-full"></span>
            <ChangeFont font={props.font} setFont={props.setFont} />
            <span className="flex bg-[#E3E1E1] h-[0.1rem] w-full"></span>
            <ChangeColor
              color={props.color}
              setColor={props.setColor}
              font={props.font}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Menu;
